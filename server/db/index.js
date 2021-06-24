const db = require('./db');
const Code = require('./models/Code.js');
const Post = require('./models/Posts')
const Comment = require('./models/Comments')
const User = require('./models/User')
const Template = require('./models/Template.js');

User.hasMany(Post);
Post.belongsTo(User);
User.hasMany(Comment);
Comment.belongsTo(User)
Post.hasMany(Comment);
Comment.belongsTo(Post);

//associations
User.hasMany(Template);
Template.belongsTo(User);

//export models
module.exports = { db, models:{ Code, User, Template, Post, Comment } };
