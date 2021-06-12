const { DataTypes, UUIDV4 } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require('../db');

const User = db.define('user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    defaultValue: 'Anonymous',
  },
  password: {
    type: DataTypes.STRING,
  },
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
  },
  github: {
    type: DataTypes.JSON,
  },
});

// encrypts password after creation or change
User.addHook('beforeSave', async (user) => {
  if (user._changed.has('password')) {
    user.password = await bcrypt.hash(user.password, 5);
  }
});

// error handler
const error = () => {
  const err = Error('bad credentails, try again');
  err.status = 401;
  return err;
};

// takes username and password and return a token
User.authenticate = async ({ username, password }) => {
  const user = await User.findOne({
    where: { username },
  });
  const passcode = await bcrypt.compare(password, user.password);
  if (user && passcode) {
    return await jwt.sign(user.id, process.env);
  } else {
    throw error();
  }
};

// gets a user id from a token
User.tokenId = async (token) => {
  try {
    const id = jwt.verify(token, process.env.JWT);
    const user = await User.findByPk(id);
    if (user) {
      return user;
    } else {
      throw err();
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = User;
