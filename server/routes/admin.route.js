const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Admin = require('../model/admin');

router.post('/authenticate', (req, res, next) => {
    console.log('in the backend');
    const username = req.body.username;
    const password = req.body.password;
  
    Admin.getAdminByUsername(username, (err, admin) => {
      if(err) throw err;
      if(!admin){
        return res.json({success: false, msg: 'Admin not found'});
      }
  
      Admin.comparePassword(password, admin.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch){
          console.log('password match');
          const token = jwt.sign(admin.toJSON(), config.secret, {
            expiresIn: 604800 // 1 week
          });
  
          res.json({
            success: true,
            token: 'JWT '+token,
            admin: {
              id: admin._id,
              username: admin.username,
            }
          });
        } else {
          console.log('password mis-match');
          return res.json({success: false, msg: 'Wrong password'});
        }
      });
    });
  });
  
  module.exports = router;