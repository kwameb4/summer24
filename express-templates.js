const express = require('express');
const fs = require('fs');
const port = 3000;

const app = express();

let totalViews = 0;
let somevar=10;

app.get('/', (req, res) => {
  totalViews++;
  somevar--;
  let html = fs.readFileSync(__dirname + '/index1.html', 'utf8');
  html = html.replace('{{views},{var}}', totalViews,somevar);
  res.send(html);
});

app.get('/about', (req, res) => {
  totalViews++;
  let html = fs.readFileSync(__dirname + '/index2.html', 'utf8');
  html = html.replace('{{views}}', totalViews);
  res.send(html);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});