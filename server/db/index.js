const db = require('./db');
const Code = require('./models/Code.js');
const User = require('./models/User.js');
const Template = require('./models/Template.js');

//associations
User.hasMany(Template);
Template.belongsTo(User);

//export models
module.exports = { db, models:{ Code, User, Template } };
