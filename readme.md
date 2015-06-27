To build and run for testing: $ grunt serve
- This also compiles main scripts and styles into single main.js and main.css
- Runs index.html in App directory

To build, minify/compress, and run: $ grunt serve:dist
- This creates compressed/minifies/renames versions of index.html, scripts, styles, and images in Dist folder
- Runs index.html in Dist directory

* Deployed files on web server are currently the 'built' index.html from the Dist folder but with the unique names for files (scripts/styles/images) removed. The scripts/styles/images are also from the Dist folder, with unique names removed. 
* For small changes to index.html, it is recommended to edit the index.html in Apps for testing, and then make same changes to index.html on the web server.


