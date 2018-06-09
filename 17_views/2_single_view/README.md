Turn a bootstrap 4 template into an angular application

Things to think about:
- Folder structure
  - Project root vs. web root
  - Naming convention of web root folder
  - Will you use firebase or not?
- CSS & JS libraries to include
- ng-app, ui.router, components

Using this template:
http://getbootstrap.com/docs/4.1/examples/sticky-footer-navbar/


First steps:
- setup a project folder
- create a public folder inside your project folder
- copy code from a _blank template into that public folder

Setup the template
- visit the URL above
- copy all the *** non-javascript html inside the body tag ***
- paste that into your index.html
- copy the style.css into your style.css

Next steps:
- Create a navigation component
  - Let's discuss naming conventions
  - Remember to add the component.js file to the index!
  - How come it still doesn't work?
  - Update the HTML in template.html
- Create new routes
- put <ui-view></ui-view> into index.html!
- Add the routes to the navigation template using ui-sref instead of href
