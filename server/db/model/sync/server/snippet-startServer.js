const Server = require('../code_snippets/model-server');

const syncServer = async () => {
  const s1 = await Server.create({
    id: 'S1',
    title: 'Server: imports',
    snippet: `
      const app = require('./modifyserver')
      const PORT = process.env.PORT || 3000
    `,
  });

  const s2 = await Server.create({
    id: 'S2',
    title: 'Server: initialize p1',
    snippet: `
      const initializeApp = async () => {
      try {
    `,
  });

  const s3 = await Server.create({
    id: 'S3',
    title: 'Server: initialize p2',
    snippet: `
      app.listen(PORT, () => console.log(\`app is listening on ${PORT}\`))
      }
      catch (error) {
              console.log(error)
      }
    }

    initializeApp()
    `,
  });

  const s4 = await Server.create({
    id: 'S4',
    title: 'Server: db1',
    snippet: `
    const db = require('./db/db')
    const syncAndSeed = require('./db/syncandseed')
    `,
  });

  const s5 = await Server.create({
    id: 'S5',
    title: 'Server: db2',
    snippet: `
    await db.sync()
    await syncAndSeed()
    `,
  });
};

module.exports = syncServer;
