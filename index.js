const express = require('express')
const app = express();
const fs = require('fs');
const path = require('path');
const imageDir = './assets';

const port = process.env.PORT || 8080;

const array = []
app.use('/assets', express.static('assets'))

fs.readdirSync(imageDir).map(fileName => {
    array.push(path.join(imageDir, fileName));
   
  });
  app.get("/images", (req, res) => {
    res.send(array);
});
app.get("/", (req, res) => {
    res.sendFile(__dirname +'/index.html');
});

  app.listen(port, () => console.log(`Example app listening on port port!`))