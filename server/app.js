const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config/database');

const Teacher = require('./model/teacher');
const Post = require('./model/post');

const teacher = require('./routes/teacher.route');
const admin = require('./routes/admin.route');

// mongoose connection
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
    console.log('Connected to database');
});


// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// passport setup
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//route setup
app.use('/api/teacher', teacher);
app.use('/api/admin', admin);

/*
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

*/
app.post('/api/blog/addPost', (req, res) => {

    temp = req.body.description;
    if(temp == '')
        temp = req.body.content.slice(0,100) + " ...";
    
    mongoose.connect(config.database, (err) => {
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
    mongoose.connect(config.database, (err) => {
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
});

app.listen(3000, () => console.log('connected on port 3000'));
