const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true}
}, {collection: 'admin'});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;

module.exports.getAdminByUsername = function(username, callback) {
    const query = {username: username};
    Admin.findOne(query, callback);
}

module.exports.comparePassword = function(adminPassword, hash, callback){
    bcrypt.compare(adminPassword, hash, (err, isMatch) => {
      if(err) throw err;
      callback(null, isMatch);
    });
};