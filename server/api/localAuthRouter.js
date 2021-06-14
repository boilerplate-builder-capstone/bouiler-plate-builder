const User = require('../db/models/User');

const localAuthRouter = require('express').Router();

// check login credentials and create a token
localAuthRouter.post('/', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const token = await User.authenticate({ username, password });
    res.send(token);
  } catch (error) {
    console.log('error occured in post/api/localAuthRouter', error);
    next(error);
  }
});

// authenticate a user if token is present ( i think we don't need it but creating just in case )
// localAuthRouter.get('/', async (req, res, next) => {
//   try {
//     const token = req.headers.authorization;
//     // use below line is && statement doesnt work
//     // !token ? res.status(401).send('you shall not pass') : '';
//     !token && res.status(401).send('you shall not pass');

//     // get the userId info from token
//     const user = await User.tokenId(token)
//     res.send(user)
//   } catch (error) {
//     console.log('error occured in get/api/localAuthRouter', error);
//     next(error);
//   }
// });

module.exports = localAuthRouter;
