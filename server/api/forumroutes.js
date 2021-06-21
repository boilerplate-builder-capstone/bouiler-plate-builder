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
  }
});

forum.get('/:id', async (req, res, next) => {
    try{
        id = req.params.id
        const post = await Post.findall({ where: {id}, include: [{
             model: Comment, 
            attributes:[{
                include: [{
                    model: User,
                    attributes:['username', 'github', 'icon']    
                }] 
            }]
        }]})
        res.status(200).send(post)
    }catch(er){
        console.log("error in getting forum posts ", er)
    }
  });

module.exports = forum;