const express = require('express');
const app = express()
const engine = require('express-handlebars');



app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)