const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('<h1>Hello!</h1>');
  next();
});

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
  const user = { name: 'Sally', hobby: 'Soccer' };
  
  res.send(user)
});

app.get('/profile', (req, res) => {
  res.send('getting profile');
});

app.post('/profile', (req, res) => {
  console.log(req.body);
  
  res.send(req.body);
});

app.listen(3000);

