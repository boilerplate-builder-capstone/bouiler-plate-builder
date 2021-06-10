const accessTokenRouter = require('express').Router();
const axios = require('axios');
const jwt = require('jsonwebtoken');
const User = require('../db/models/User');

accessTokenRouter.get('/', async (req, res, next) => {
  try {
    //getting an access token from github
    let response = (
      await axios.post(
        'https://github.com/login/oauth/access_token',
        {
          code: req.query.code,
          client_id: process.env.client_id,
          client_secret: process.env.client_secret,
        },
        {
          // makes token error reading easier
          headers: {
            accept: 'application/json',
          },
        }
      )
    ).data;
    // error handler for not receiving a token
    if (response.error) {
      const error = Error(response.error);
      error.status = 401;
      throw error;
    }

    const accessToken = response.access_token;

    //get user info from github
    response = (
      await axios.get('https://api.github.com/user', {
        headers: {
          authorization: `token ${accessToken}`,
        },
      })
    ).data;

    const { login, ...github } = response;

    // locate the user in our db
    let user = await User.findOne({
      where: {
        username: login,
      },
    });

    if (!user) {
      user = await User.create({
        username: login,
        github,
      });
    }
    // will use in the future
    // else {
    //   await User.update({ github });
    // }

    // const info = `Logged in successfully, under ${login}`;

    console.log(process.env.JWT);

    const jwtToken = jwt.sign({ id: user.id }, process.env.JWT);

    const tokenResponse = `
    <html>
    <head>
        <script>
            window.localStorage.setItem('token','${jwtToken}');
            window.document.location = '/';
            </script>
    </head>
    <body></body>
</html>
    `;

    res.send(tokenResponse);
  } catch (error) {
    console.log('error in accessTokenRouter', error);
    next(error);
  }
});

module.exports = accessTokenRouter;
