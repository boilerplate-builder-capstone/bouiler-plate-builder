// ALL COMMENTS ARE SEQUELIZE/PG
const db = require('./db/db')
const syncAndSeed = require('./db/syncandseed')

const app = require('./modifyserver')
const PORT = process.env.PORT || 3000

const initializeApp = async () => {
	try {
		await db.sync()
		await syncAndSeed()
        app.listen(PORT, () => console.log(`app is listening on ${PORT}`))  
    }
    catch (error) {
	        console.log(error)
    }
}

initializeApp()