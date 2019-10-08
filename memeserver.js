const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = require('./displayImage/router');

app.use('/gif', router);
app.use(express.static(path.join(__dirname, 'displayImage')));

app.get('/', (req, res) => res.send('demofile1'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
