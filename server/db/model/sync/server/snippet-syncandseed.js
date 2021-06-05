const Server = require('../code_snippets/model-server');

const syncSyncAndSeed = async () => {
  const s1 = await Server.create({
    id: 'S1',
    title: 'Require db',
    snippet: `
      const db = require('./db')
    `,
  });

  const s2 = await Server.create({
    id: 'S2',
    title: 'Require models',
    snippet: `
      const { models: { ModelName, OtherModelName } } = require('./models/modelsandrelationships')
    `,
  });

  const s3 = await Server.create({
    id: 'S3',
    title: 'syncAndSeed',
    snippet: `
      const syncAndSeed = async() => {
        try {
            await db.sync({ force: true })
            //create your data instances here. See documentation: https://sequelize.org/master/manual/model-instances.html
            // await ModelName.create({
            //     exampleProperty: 'Test property!'
            // })
            // await OtherModelName.create({
            //     exampleProperty: 'Test property!'
            // })

        } catch (error) {
            console.log(error)
        }
    }

    `,
  });

  const s4 = await Server.create({
    id: 'S4',
    title: 'Module exports',
    snippet: `
      module.exports = syncAndSeed
    `,
  });
}

module.exports = syncSyncAndSeed;
