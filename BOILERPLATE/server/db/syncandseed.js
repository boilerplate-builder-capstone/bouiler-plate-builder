const db = require('./db')
const { models: { ModelName, OtherModelName } } = require('./models/modelsandrelationships')

const syncAndSeed = async() => {
    try {
        await db.sync({ force: true })
        //create your data instances here
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

module.exports = syncAndSeed