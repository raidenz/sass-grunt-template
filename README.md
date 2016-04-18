# sass-grunt-template
basic css with sass


## why i create this Or why u need it?
if you work as programmer and building a website, your client usually need a revision after we build their website and it will be pain when the page revision always change. the main problem is there will be some orphan (unused) css. the more the revision the more it becomes.
this template will help you to manage css with sass code. include file per pages, so if you want to change the page style you just need to change the sass files.

## why im create this?
im lazy to always repeat the same task everytime so i share it :D


## HOw to use
- locate your web html on htdoc / www server folder
- open Gruntfile.js, change 'localhost/changeyourprojectfolder' to your project folder
- make sure you have nodejs / install npm
- run `npm install`
- run `npm install -g browser-sync`
- run `bower install` just use it if you want css or dependencies install to libs folder
- run `grunt on`

## build mode
- run `grunt dosass` it will compile the sass only
- run `grunt build` it will create zip to folder build