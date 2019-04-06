const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Teacher = require('./model/teacher');
const Post = require('./model/post');

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
                mongoose.disconnect();
                return res.status(200).json({
                    status: 'success',
                    data: teacher
                })
            }
            else
            {
                mongoose.disconnect();
                return res.status(200).json({
                    status: 'failed',
                    message: 'Login failed'
                })
            }
        })
    })
});

app.post('/api/blog/addPost', (req, res) => {

    temp = req.body.description;
    if(temp == '')
        temp = req.body.content.slice(0,100) + " ...";
    
    mongoose.connect(url, (err) => {
        if(err) throw err;

        console.log('connection to mongodb made');
        const post = new Post({
            title: req.body.title,
            description: temp,
            url: req.body.url,
            content: req.body.content
        })

  
        post.save((err, doc) => {
            if(err) throw err;

            mongoose.disconnect();
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    })

})

app.post('/api/blog/showPost', (req, res) => {
    mongoose.connect(url, (err) => {
        if(err) throw err;

        Post.find( {}, [], { sort: { _id: -1 } }, (err, doc) => {
            if(err) throw err;
            
            mongoose.disconnect();
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    })
})

app.listen(3000, () => console.log('connected on port 3000'));
