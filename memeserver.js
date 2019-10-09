const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = require('./displayImage/router');
const fs = require("fs")

const directoryPath = path.join(__dirname, "displayImage/memes/")


// bruger fs.readdir til at gennemløbe min mappe /memes/
fs.readdir(directoryPath, function (err, files) {

    if (err) {
        console.log("Error getting directory information.")
    }

    else {

        let html = "<ul>";
        let number = 1;

        // et for-loop der løber hvert element igennem og oprette det som en unordered list.
        for (let file of files) {
            html += "<h1 style=color:red><strong>";
            html += "<li>";
            html += `<a href="/memes/${file}">Meme nummer ${number} = ${file} 💩</a>`;
            html += "</li>";
            html += "</h1></strong>";
            number++;
        }
        html += "</ul>";

        // bruger min express variabel app til at sende min html variabel
        app.get('/', (req, res) => res.send(html));

    }
})


app.use('/gif', router);
app.use(express.static(path.join(__dirname, 'displayImage')));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

