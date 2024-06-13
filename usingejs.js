const express = require('express');
const fs = require('fs');
const ejs = require('ejs');
const port = 3000;

const app = express();

let totalViews = 0;

app.get('/', (req, res) => {
  totalViews++;

  let html = fs.readFileSync(__dirname + '/index-for-ejs.html', 'utf8');
  //html = ejs.render(html, {views: totalViews},);
  html = ejs.render(html, {views: totalViews, name: 'Sebastian'});

  res.send(html);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});