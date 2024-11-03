const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine','ejs');
app.use(express.static('public'));


app.get('/',(req,res) => {
    res.render('index');
});

app.get('/login',(req,res) => {
    res.render('login');
});

app.get('/register',(req,res) => {
    res.render('register');
});
app.get('/dashboard',(req,res)=>{
    res.render('dashboard');
});
app.get('/quizlist',(req,res)=>{
    res.render('quizlist');
});



app.listen(PORT,()=>{
    console.log('dzialo..');
});