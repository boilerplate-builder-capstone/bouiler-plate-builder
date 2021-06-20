const gitCreateRouter = require('express').Router();
const axios = require('axios');
const jwt = require('jsonwebtoken');

gitCreateRouter.post('/', async (req, res, next) => {
  try {
    const { gitToken } = req.body;
    const token = jwt.verify(gitToken, process.env.JWT);
    console.log(
      '************************************************************',
      token.token
    );
    const repoDetail = {
      name: 'testKol',
      description: 'hello world',
      private: false,
    };

    const response = (
      await axios.post(`https://api.github.com/user/repos`, repoDetail, {
        headers: {
          // authorization: `token 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`,
          authorization: `token ${token.token}`,
        },
      })
    ).data;

    res.send(response);
  } catch (error) {
    console.log('error occured in /api/gitCreate');
    next(error);
  }
});

module.exports = gitCreateRouter;
