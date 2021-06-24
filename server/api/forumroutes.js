const forum = require('express').Router();
const { Icon } = require('@material-ui/core');
const { db, models:{ Code, Post, Comment, User } } = require('../db');

forum.get('/', async (req, res, next) => {
  try{
      const posts = await Post.findAll({
          order: [['createdAt', 'DESC']], 
          include:[{
            model: User,
            attributes:['username', 'github', 'icon']    
        }]})
      res.status(200).send(posts)
  }catch(er){
      console.log("error in getting forum posts ", er)
      next(er)
  }
});

forum.get('/:id', async (req, res, next) => {
    try{
        id = req.params.id
        const post = await Post.findAll({ 
            where: {id}, 
            include: [{
                model: Comment,
                include: [{
                    model: User,
                    attributes:['username', 'github', 'icon']    

                }]
            }, { 
                model: User,
                attributes:['username', 'github', 'icon'] 
            }]
        })
        res.status(200).send(post)
    }catch(er){
        console.log("error in getting forum posts ", er)
        next(er)
    }
  });

  forum.post('/createpost', async (req, res, next)=>{
      try{
        const { userId, post, title, repo} = req.body.contents
        await Post.create({userId, post, title, repo})
        res.sendStatus(200)
      }catch(er){
        console.log("error in creating forum posts ", er)
        next(er)
      }
  })
  forum.post('/createreply', async (req, res, next)=>{
    try{
      const { userId, comment, postId} = req.body.contents
      await Comment.create({userId, comment, postId})
      res.sendStatus(200)
    }catch(er){
      console.log("error in creating forum posts ", er)
      next(er)
    }
})

module.exports = forum;