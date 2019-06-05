const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Teacher = require('../model/teacher');
/*
router.post('/register', (req, res, next) => {
    let newTeacher = new Teacher({
        name = req.body.name,
        username = req.body.username,
        passport = req.body.password
    });

    Teacher.addTeacher(newTeacher, (err, teacher) => {
        if(err){
            res.json({success: false, msg: "Failed to register teacher"});
        }

        else
            res.json({success: true, msg: "Teacher registered"+teacher});
        
    });
});
*/
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
  
    Teacher.getUserByUsername(username, (err, teacher) => {
      if(err) throw err;
      if(!teacher){
        return res.json({success: false, msg: 'Teacher not found'});
      }
  
      Teacher.comparePassword(password, teacher.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch){
          const token = jwt.sign(teacher, config.secret, {
            expiresIn: 604800 // 1 week
          });
  
          res.json({
            success: true,
            token: 'JWT '+token,
            teacher: {
              id: teacher._id,
              name: teacher.name,
              username: teacher.username,
            }
          });
        } else {
          return res.json({success: false, msg: 'Wrong password'});
        }
      });
    });
  });
  module.exports = router;