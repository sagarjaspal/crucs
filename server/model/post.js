const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title : { type: String, required: true, unique: true },
    description : { type: String },
    content : { type: String, required: true},
    author : {type: String}
}, { collection: 'post'});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;