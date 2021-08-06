const glob = require('glob');
const fs = require('fs');
const stripJsonComments = require('strip-json-comments');
const parse = require('parse-git-config');
const gitConfigPath = require('git-config-path');

async function getGitInfo(context) {
  // Getting repo info
  context.git = parse.expandKeys(parse.sync({ cwd: context.targetPath }));
  if (context.git?.remote?.origin?.url) {
    context.git.html_url = context.git.remote.origin.url.replace(/.git$/, '');
    context.git.bugs_url = `${context.git.html_url}/issues`;
    context.git.home_url = `${context.git.html_url}#readme`;
  }

  // Getting user info
  var globalConfigPath = gitConfigPath('global');
  context.gitUser = parse.expandKeys(parse.sync({ path: globalConfigPath }));

  return Promise.resolve();
}

function loadPartialsOnTarget(context) {
  return new Promise(async (resolve, reject) => {
    // Including partials on context
    glob(
      '**/scafflater.jsonc',
      { root: context.targetPath, dot: true },
      async (err, files) => {
        if (err) reject(err);

        context.partials = [];
        for (const file of files) {
          try {
            const info = JSON.parse(
              stripJsonComments(fs.readFileSync(file).toString())
            );
            if (info.partial) {
              context.partials.push(info.partial);
            }
          } catch (e) {
            continue;
          }
        }

        resolve(context);
      }
    );
  });
}

module.exports = async (context) => {
  return Promise.all([loadPartialsOnTarget(context), getGitInfo(context)]);
};
