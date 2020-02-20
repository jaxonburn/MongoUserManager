const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const routes = require('./routes/routes');
const app = express();
const PORT = process.env.PORT; //config.PORT
const DB = process.env.DATABASE_URL; //config.DB
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false, 
  });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));  
app.use('/users', routes);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
    
})
app.get('/edit', (req, res) => {
    res.sendFile(__dirname + 'edit.pug')
})

app.listen(PORT, ()=>{
    console.log(`app server is listening on port: ${PORT}`);
}); 