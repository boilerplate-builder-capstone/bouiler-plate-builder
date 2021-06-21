const User = require('../../server/db/models/User');
const Comment = require('../../server/db/models/Comments');
const Post = require('../../server/db/models/Posts'); 


const userSync = async () => {
  const maciej = await User.create({
    username: 'mpiech',
    password: 'neon green',
  });

  const kevin = await User.create({
    username: 'kflessa',
    password: 'welcome123',
  });

  const ellie = await User.create({
    username: 'eking',
    password: 'welcome456',
  });

  const fred = await User.create({
    username: 'fzhand',
    password: 'welcome789',
  });
  const Post1 = await Post.create({
        post: "Here is a Test Head Post",
        userId: fred.id
      })
  const Post2 = await Post.create({
        post: "Here is a Test Head Post 2",
        userId: fred.id
      })
  const Post3 = await Post.create({
        post: "Here is a Test Head Post 3",
        userId: kevin.id
      })
  const Post4 = await Post.create({
        post: "Here is a Test Head Post 4",
        userId: ellie.id
      })
  const Com1 = await Comment.create({
          comment: "here is a comment ment for Post1",
          postId: Post1.id,
          userId: kevin.id
    })
    const Com2 = await Comment.create({
      comment: "here is a comment ment for Post1",
      postId: Post1.id,
      userId: fred.id
    })
    const Com3 = await Comment.create({
      comment: "here is a comment ment for Post1",
      postId: Post1.id,
      userId: ellie.id
    })
    const Com4 = await Comment.create({
      comment: "here is a comment ment for Post2",
      postId: Post2.id,
      userId: maciej.id
    })
    const Com5 = await Comment.create({
      comment: "here is a comment ment for Post3",
      postId: Post3.id,
      userId: ellie.id
    })
    const Com6 = await Comment.create({
      comment: "here is a comment ment for Post4",
      postId: Post4.id,
      userId: maciej.id
    })

};

module.exports = userSync;
