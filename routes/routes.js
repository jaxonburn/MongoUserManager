const express = require('express');
const app = express.Router();
const repository = require('../repositories/userRepository');
const path = require("path");
express().set("views", path.join(__dirname, 'views'))


app.post('/edit', (req, res) => {
  const id = req.body.id
  var object = { 
    first: req.body.first,
    last: req.body.last,
    age: req.body.age,
    email: req.body.email
  }
  repository.updateById(id, object).then(() => {
    res.redirect('/');
  })
})

app.get('/', (req, res) => {
  repository.findAll().then((Users) => {
    res.json(Users);
  }).catch((error) => console.log(error));
});
//creates user
app.post('/', (req, res) => {
  const { first, last, age, email } = req.body;
  repository.create(first, last, age, email).then((User) => {
    res.json(User);
  }).catch((error) => console.log(error));
});

app.post('/filter', (req, res) => {
  repository.filter(req.body.Ascending).then((filtered) => {
    res.json(filtered);
  }).catch((error) => console.log(error))
  
});

app.post('/delete', (req, res) => {
    const id = req.body.id;
    repository.deletebyId(id).then(() => {
      res.json(id + " has been deleted");
    }).catch((error) => console.log(error));
})

app.post('/find', (req, res) => {
  repository.findByFirst(req.body.firstname).then((found) => {
    res.json(found)
  }).catch((error) => console.log(error));
})
app.post('/finduser', (req, res) => {
  const id = req.body.id

  repository.find(id).then((found) => {
    res.render('edit.pug', {data: found})
  
  }).catch((error) => console.log(error))
});
module.exports = app;