const express = require('express')
const app = express();
const fs = require('fs');
const path = require('path');
const imageDir = './assets';
const img = './images';

const port = process.env.PORT || 8080;

const array = []
app.use('/assets', express.static('assets'))


fs.readdirSync(imageDir).map(fileName => {
    array.push(path.join(imageDir, fileName));

});
app.get("/images", (req, res) => {

    const temp = [];

    for (var i =0;i<array.length;i++) {
        const ext = array[i].split('.').pop();
        const name =   array[i].replace('assets/',"");
        const path = array[i];
        temp.push({extension : ext, name : name, path: path})
    }
    res.send(temp);
});
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
