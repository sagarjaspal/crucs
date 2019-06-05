const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true}
}, {collection: 'teacher'});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;

module.exports.getUserById = function(id, callback){
    Teacher.findById(id, callback);
}

module.exports.getTeacherByUsername = (username) => {
     const query = {username: username};
     Teacher.findOne(query);
}

module.exports.addTeacher = (newTeacher) => {
    bcrypt.genSalt(10, (err, salt) => {
        if(err) throw err;

        bcrypt.hash(newTeacher.password, salt, (err, hash) => {
            if(err) throw err;

            newTeacher.password = hash;
            newTeacher.save();
        })
    });
}

module.exports.comparePassword = function(teacherPassword, hash, callback){
    bcrypt.compare(teacherPassword, hash, (err, isMatch) => {
      if(err) throw err;
      callback(null, isMatch);
    });
};

