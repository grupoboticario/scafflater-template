[comment]: # '@scf-option  { "targetName": "README.md" }'
[comment]: # '@scf-option  { "appenders": ["./appenders/appender"] }'
[comment]: # '@scf-option  { "appendStrategy": "replace" }'
[comment]: # '@scf-option  { "lineCommentTemplate": "<!-- {{comment}} -->" }'

# {{case "noCaseAndTitle" parameters.name}}

{{parameters.description}}

- [Initialize Template](#initialize-template)
- [Partials](#partials)

# Initialize Template

```sh-session
$ npm install -g scafflater-cli

{{#if git.remote.origin.url}}
$ scafflater-cli init {{git.html_url}}
{{else}}
# REPLACE GITHUB REPO IN THE FOLLOWING LINE TO YOUR REPO ADDRESS
$ scafflater-cli init https://github.com/OWNWE/REPO
{{/if}}
```

# Partials

<!-- @scf-region partials-menu -->

run `scafflater-cli partial:run update-readme` to generate the partials documentation

<!-- @end-scf-region -->

<!-- @scf-region partials -->

run `scafflater-cli partial:run update-readme` to generate the partials documentation

<!-- @end-scf-region -->

---

> This template was generate using [Scafflater](https://github.com/chicoribas/scafflater)
