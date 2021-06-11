# boilerplate-builder

Discussion on Models

- One model for the snippets, each instance is a file
- Add filename property to our codesnippets model
- Add category property to our codesnippets model
  Categories align with req.body: server, db, extrarouter (if it brings new files), react, reactRouter, redux

File Structure

- Bring "sync" folder outside of "server" into it's own folder called bin.
- Remove nested folders within server/db/model so that "model" just has the model files (User, Code)

Heroku Deploy

- if you are having trouble deploying on heroku due because of oauth
- check prof's video at timestamp 1:07:00
- https://www.youtube.com/watch?v=o58zhvHC5kQ
