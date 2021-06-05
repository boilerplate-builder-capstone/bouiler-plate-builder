const Server = require('../code_snippets/model-server');

const syncdb = async () => {
  const s1 = await Server.create({
    id: 'S1',
    title: 'Require sequelize',
    snippet: `
    const Sequelize = require('sequelize')
    `
  });

  const s2 = await Server.create({
    id: 'S2',
    title: 'Const db',
    snippet:
    "const dbName = /* NAME OF YOUR DATABASE HERE */ \n\
     const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost/${dbName}`)"
  });

  const s3 = await Server.create({
    id: 'S3',
    title: 'Module exports',
    snippet: `
      module.exports = db
    `
  });

}

module.exports = syncdb;
