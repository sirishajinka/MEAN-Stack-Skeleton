const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let students = [];

app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get('/student', (req,res) => {
});


app.post('/student' , (req,res) => {
});

app.put('/student/:id', (req,res) => {
});

app.delete('/student/:id' , (req,res) => {
})

app.listen(port, () => {
    console.log(`port is ${port}`);
});