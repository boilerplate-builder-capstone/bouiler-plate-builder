const Server = require('../code_snippets/model-server');

const syncModelsAndRelationships = async () => {
  const s1 = await Server.create({
    id: 'S1',
    title: 'Require Models',
    snippet: `
      const ModelName = require('./modelname')
      const OtherModelName = require('./othermodelname')
    `,
  });

  const s2 = await Server.create({
    id: 'S2',
    title: 'Define associations',
    snippet: `
      // define your model associations below. See documentation: https://sequelize.org/master/manual/assocs.html
    `,
  });

  const s3 = await Server.create({
    id: 'S3',
    title: 'Module exports',
    snippet: `
      const OtherModelName = db.define('otherModelName', {
        exampleProperty: {
            type: DataTypes.STRING
        }
      })
    `,
  });
}

module.exports = syncModelsAndRelationships;
