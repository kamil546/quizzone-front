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
app.get('/quizzes',(req,res)=>{
    res.render('quizzes');
});
app.get('/my-quizzes',(req,res)=>{
    res.render('my-quizzes');
});
app.get('/quizzes/:id', (req, res)=>{
    const id = req.params.id;
    res.render('quiz-game', { id: id });  
});
app.get('/score/:id', (req, res)=>{
    const id = req.params.id;
    res.render('score', { id: id });  
});
app.get('/add-new-quiz', (req, res)=>{
    res.render('add-new-quiz');  
});
app.get('/edit-quiz/:id', (req, res)=>{
    const id = req.params.id;
    res.render('edit-quiz', { id: id });  
});
app.get('/show-quiz/:id', (req, res)=>{
    const id = req.params.id;
    res.render('show-quiz', { id: id });  
});






app.listen(PORT,()=>{
    console.log('dzialo..');
});