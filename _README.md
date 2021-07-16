<!-- @scf-option { "targetName": "README.md" } -->
<!-- @scf-option { "appenders": ["./appenders/appender"] } -->
<!-- @scf-option { "appendStrategy": "replace" } -->
[comment]: # (@scf-option  { "lineCommentTemplate": "<!-- {{comment}} -->" })

{{parameters.name}}
===

{{parameters.description}}

  * [Initialize Template](#initialize-Template)
  * [Partials](#partials)


# Initialize Template
```sh-session
$ npm install -g scafflater-cli

# REPLACE GITHUB REPO IN THE FOLLOWING LINE TO YOUR REPO ADDRESS
$ scafflater-cli init https://github.com/OWNWE/REPO 
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