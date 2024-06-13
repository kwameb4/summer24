const express = require('express');
const port = 3000;

const app = express();

let totalViews = 0;

app.get('/', (req, res) => {
  totalViews++;
  res.send("<h1>Welcome to my website!</h1> Total views: " + totalViews);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});