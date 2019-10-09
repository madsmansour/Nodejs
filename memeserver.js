const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = require('./displayImage/router');

const fs = require("fs")
 
const directoryPath = path.join(__dirname, "displayImage/memes/")


// bruger fs.readdir til at gennemløbe min mappe /memes/
fs.readdir(directoryPath, function(err, files) {
  
  if (err) {
    console.log("Error getting directory information.")
  } 
  
  else {

        let html = "<ul>";
        let number = 1;

        // et for-loop der løber hvert element igennem og oprette det som en unordered list.
    for (let file of files) {
        html += "<h1>";
        html += "<li>";
        html += `<a href="/memes/${file}">Billede ${number}  ${file}</a>`;
        html += "</li>";
        number++;
    }
        html += "</ul>";
        html += "</h1>";

    app.get('/', (req, res) => res.send(html));

  }
})






app.use('/gif', router);
app.use(express.static(path.join(__dirname, 'displayImage')));




app.listen(port, () => console.log(`Example app listening on port ${port}!`))

