console.log('Current directory: ' + process.cwd());
const glob = require('glob')
const fs = require('fs')
const stripJsonComments = require('strip-json-comments')

module.exports = async (context) => {
  return new Promise(async (resolve, reject) => {
    // Including partials on context
    glob('/**/.scafflater', { root: context.targetPath }, async (err, files) => {
      if (err)
        reject(err)

      context.partials = []
      for (const file of files) {
        try {
          const info = JSON.parse(
            stripJsonComments(
              fs.readFileSync(file).toString()))
          if (info.type === 'partial') {
            context.partials.push(info)
          }
        } catch (e) {
          continue
        }
      }

      resolve(context)
    })
  })
}