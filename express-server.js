const express = require('express');
const port = 3000;

const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
  //res.send('Hello World');
  //res.send('<h1>Hello HTML</h1>');
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {

    //res.send('Hello World');
    //res.send('<h1>Hello HTML</h1>');
    res.sendFile(__dirname + '/gridres.html');
  });



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});