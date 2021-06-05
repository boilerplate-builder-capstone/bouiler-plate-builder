const Server = require('../code_snippets/model-server');

const syncModelName = async () => {
  const s1 = await Server.create({
    id: 'S1',
    title: 'DataTypes',
    snippet: `
    const { DataTypes } = require('sequelize')
    `,
  });

  const s2 = await Server.create({
    id: 'S2',
    title: 'require db',
    snippet: `
      const db = require('../db')
    `,
  });

  const s3 = await Server.create({
    id: 'S3',
    title: 'Const model',
    snippet: `
      const ModelName = db.define('modelName', {
        exampleProperty: {
            type: DataTypes.STRING
        }
    })

    `,
  });

  const s4 = await Server.create({
    id: 'S4',
    title: 'Module exports',
    snippet: `
      module.exports = ModelName
    `,
  });
}

module.exports = syncModelName;
