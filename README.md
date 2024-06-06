# Scafflater Template

An Scafflater template to generate Scafflater templates

- [Initialize Template](#initialize-template)
- [Partials](#partials)
  - [add-partial](#add-partial)
  - [update-readme](#update-readme)

## Initialize Template

```bash
npm install -g @scafflater/scafflater-cli
scafflater-cli init https://github.com/scafflater/scafflater-template
```

# Partials

<!-- @scf-region partials-menu -->

- [Add Partial](#add-partial)

- [Update Readme](#update-readme)

<!-- @end-scf-region -->

<!-- @scf-region partials -->

## Add Partial

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

## Update Readme

```
USAGE
  $ scafflater-cli partial:run update-readme
OPTIONS
  -o, --output=output          [default: ./] The output folder
  -p, --parameters=parameters  [default: ] The parameters to init template

DESCRIPTION
  Update partials section of the README.md file
```

<!-- @end-scf-region -->
