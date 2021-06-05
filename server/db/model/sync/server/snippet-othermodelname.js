const Server = require('../code_snippets/model-server');

const syncOtherModelName = async () => {
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
      const OtherModelName = db.define('otherModelName', {
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
      module.exports = OtherModelName
    `,
  });
}

module.exports = syncOtherModelName;
