[comment]: # (@scf-option  { "lineCommentTemplate": "<!-- {{comment}} -->" })

<!-- @scf-region partials-menu -->
<!-- @scf-option { "appendStrategy": "replace" } -->

{{#each partials}}
  * [{{this.name}}](#{{this.name}})
{{/each}}

<!-- @end-scf-region -->


<!-- @scf-region partials -->
<!-- @scf-option { "appendStrategy": "replace" } -->

{{#each partials}}

## {{this.name}}

```
USAGE
  $ scafflater-cli partial:run {{this.name}}
OPTIONS
  -o, --output=output          [default: ./] The output folder
  -p, --parameters=parameters  [default: ] The parameters to init template

DESCRIPTION
  {{this.description}}
```

{{#if this.parameters}}
<div class="mobile-side-scroller">
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    {{#each this.parameters}}
    <tr>
      <td>
        <p><code>{{this.name}}</code></p>
      </td>
      <td>
        <p>{{this.message}}</p>
      </td>
    </tr>
  {{/each}}
  </tbody>
</table>
</div>
{{/if}}

{{/each}}


<!-- @end-scf-region -->