const zippedBoilerPlate = require('express').Router();
const { models: { Code }} = require('../db')
const ejs = require('ejs')
const fs = require('fs')
const zip = new require('node-zip')()
const path = require('path')

//helper function designed to deal with multiple files in a directory folder
function zipHelper(fileString, arrObject){
    arrObject.forEach(file => zip.file(`${fileString}${file.name}`, file.contents))

}

function createFile(key, variable){   

    let data = Code.findByPk(key)
    let name = data.fileName
    let contents = ejs.render(data.snippet, variable)
        

    return {name, contents}
}

zippedBoilerPlate.get('/', async (req, res, next) => {
  try {

    let { server, react } = req.query
    //need to fix the issues here with wrong datatypes being passed through for whatever reason
    console.log(server.db, react)
    let appjs = createFile('R2', {react})

    //intialize variables
    let reactreduxObjectArray = [] 
    let clientObjectArray = []
    let publicObjectArray = []
    let modelObjectArray = []
    let dbObjectArray = []
    let routesObjectArray = []
    let serverObjectArray = []
    let configObjectArray = []
    
    //react 
    if(react){

      clientObjectArray.push(createFile('R1', react))
      //react redux logic
      if(react.redux){
        //creates array object for redux components on client side
        reactreduxObjectArray.push(createFile('R3', {}))
        reactreduxObjectArray.push(createFile('R4', {}))
        reactreduxObjectArray.push(createFile('R5', {}))
        reactreduxObjectArray.push(createFile('R6', {}))
      }
    }
   
    //The app index html creation for htmlindex in public folder
    clientObjectArray.push(createFile('P1', react))

    //CSS file creation in public folder
    publicObjectArray.push(createFile('P2', {}))

    if(server){
      /* SERVER DB ROUTER STRUCTURE NEEDS TO BE ADJUSTED!!!!!*/
      serverObjectArray.push(createFile('S2', server))
      serverObjectArray.push(createFile('S1', server))

      routesObjectArray.push(createFile('S8', {}))
  
      if(server.db){
        //main db file creation
        dbObjectArray.push(createFile('S3', {}))
        //seeding file created
        configObjectArray.push(createFile('S7', {}))
        //server database object creation
        modelObjectArray.push(createFile('S4', {}))
        modelObjectArray.push(createFile('S6', {}))
        modelObjectArray.push(createFile('S5', {}))
      }
    }
    configObjectArray.push(createFile('.babelrc', {}, ''))
    configObjectArray.push(createFile('webpack', {}, 'config.js'))
    configObjectArray.push(createFile('package', {server, react}, 'json'))

    zipHelper('client/reactredux/', reactreduxObjectArray)
    zipHelper('client/', clientObjectArray)
    zipHelper('public/', publicObjectArray)
    zipHelper('server/db/models/', modelObjectArray)
    zipHelper('server/db/', dbObjectArray)
    zipHelper('server/routes/', routesObjectArray)
    zipHelper('server/', serverObjectArray)
    zipHelper('client/components/', [appjs])
    zipHelper('', configObjectArray)


    let data = zip.generate({base64:false,compression:'DEFLATE'});

    res.type('zip');
    res.send(Buffer.from(data, 'binary'));

  } catch (error) {
    console.log('bad call ', error);
    next(error);
  }
});

module.exports = zippedBoilerPlate;
