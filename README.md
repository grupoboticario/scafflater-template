<!-- @scf-option {"ignore": true} -->

# Scafflater Template <!-- omit in toc -->

An Scafflater template to generate Scafflater templates

- [Initialize Template](#initialize-template)
- [Partials](#partials)
  - [add-partial](#add-partial)
  - [update-readme](#update-readme)

# Initialize Template

```sh-session
$ npm install -g scafflater-cli
$ scafflater-cli init https://github.com/chicoribas/scafflater-template
```

# Partials

<!-- @scf-region partials-menu -->

- [Initialize Template](#initialize-template)
- [Partials](#partials)
  - [add-partial](#add-partial)
  - [update-readme](#update-readme)

<!-- @end-scf-region -->

<!-- @scf-region partials -->

## add-partial

```
USAGE
  $ scafflater-cli partial:run add-partial
OPTIONS
  -o, --output=output          [default: ./] The output folder
  -p, --parameters=parameters  [default: ] The parameters to init template

DESCRIPTION
  Add a new partial the template
```

<div class="mobile-side-scroller">
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p><code>name</code></p>
      </td>
      <td>
        <p>Name</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>description</code></p>
      </td>
      <td>
        <p>Description</p>
      </td>
    </tr>
  </tbody>
</table>
</div>

## update-readme

```
USAGE
  $ scafflater-cli partial:run update-readme
OPTIONS
  -o, --output=output          [default: ./] The output folder
  -p, --parameters=parameters  [default: ] The parameters to init template

DESCRIPTION
  Update the README.md file to refresh partials section
```

<!-- @end-scf-region -->
