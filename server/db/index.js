const db = require('./db');
const Code = require('./models/Code.js');
const Post = require('./models/Posts')
const Comment = require('./models/Comments')
const User = require('./models/User')

User.hasMany(Post);
Post.belongsTo(User);
User.hasMany(Comment);
Comment.belongsTo(User)
Post.hasMany(Comment);
Comment.belongsTo(Post);



module.exports = { db, models:{ Code, Post, Comment, User } };
