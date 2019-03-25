const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Teacher = require('./model/teacher');

const url = 'mongodb://localhost/cseDb';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.post('/api/user/login', (req, res) => {
    mongoose.connect(url, (err) => {
        if(err) throw err;
        Teacher.find({username: req.body.username, password: req.body.password}, (err, teacher) => {
            if(err) throw err;
            if(teacher.length === 1)
            {
                return res.status(200).json({
                    status: 'success',
                    data: teacher
                })
            }
            else
            {
                return res.status(200).json({
                    status: 'failed',
                    message: 'Login failed'
                })
            }
        })
    })
});

app.listen(3000, () => console.log('connected on port 3000'));
