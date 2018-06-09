Now we're gonna take the Home module and add another controller to handle our articles view

Things to think about:
- Is this a new module, component, or controller?
- Folder structure
- Naming convention of files

First steps:
- setup a folder and files
- include them in index.html

Next steps:
- 1 controller, multiple views (html files)
- What are different views we might want? Hint: CRUD :)
- Create a list of article titles:
    - when you click on an article it should load on the right side of the screen
    - and if you want you edit it, then save it, etc...
- You're gonna need to use <ui-view></ui-view> inside your main articles template