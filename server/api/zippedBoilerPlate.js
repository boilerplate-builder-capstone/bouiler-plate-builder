const zippedBoilerPlate = require('express').Router();
const { models: { Code }} = require('../db')
const ejs = require('ejs')
const nodezip = require('node-zip')
const zip = new nodezip();

//helper function designed to deal with multiple files in a directory folder
function zipHelper(fileString, arrObject){    
  if (arrObject.length){
    arrObject.forEach(file => zip.file(`${fileString}${file.name}`, file.contents))
  }
}

async function createFile(key, variable){   
  try{
    let data = await Code.findByPk(key)
    let name = data.fileName
    let contents = ejs.render(data.snippet, variable)
    return {name, contents}
  }catch(er){
    console.log(er)
  }
}

zippedBoilerPlate.post('/', async (req, res, next) => {
  try {
    let boiler = req.body
    //need to fix the issues here with wrong datatypes being passed through for whatever reason
    let appjsObjectArray = []
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
    if(boiler.react){
      appjsObjectArray.push(createFile('R2', boiler))
      configObjectArray.push(createFile('S10',{}))
      configObjectArray.push(createFile('R7', boiler))
      clientObjectArray.push(createFile('R1', boiler))
      //react redux logic
      if(boiler.react.redux){
        //creates array object for redux components on client side
        reactreduxObjectArray.push(createFile('R3', {}))
        reactreduxObjectArray.push(createFile('R4', {}))
        reactreduxObjectArray.push(createFile('R5', {}))
        reactreduxObjectArray.push(createFile('R6', {}))
      }
    }
   
    //The app index html creation for htmlindex in public folder
    clientObjectArray.push(createFile('P1', boiler))

    //CSS file creation in public folder
    publicObjectArray.push(createFile('P2', {}))

    if(boiler.server){
      /* SERVER DB ROUTER STRUCTURE NEEDS TO BE ADJUSTED!!!!!*/
      serverObjectArray.push(createFile('S2', boiler))
      serverObjectArray.push(createFile('S1', boiler))

      routesObjectArray.push(createFile('S8', boiler))
  
      if(boiler.server.db){
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
    configObjectArray.push(createFile('S9', boiler))
    
    Promise.all(reactreduxObjectArray).then((data)=>zipHelper('client/reactredux/', data))
    Promise.all(clientObjectArray).then((data)=>zipHelper('client/', data))
    Promise.all(publicObjectArray).then((data)=>zipHelper('public/', data))
    Promise.all(modelObjectArray).then((data)=>zipHelper('server/db/models/', data))
    Promise.all(dbObjectArray).then((data)=>zipHelper('server/db/', data))
    Promise.all(routesObjectArray).then((data)=>zipHelper('server/routes/', data))
    Promise.all(serverObjectArray).then((data)=>zipHelper('server/', data))
    Promise.all(appjsObjectArray).then((data)=>zipHelper('client/components/', data))
    Promise.all(configObjectArray).then((data)=>zipHelper('', data)).then(()=>{
    
      let data = zip.generate({base64:false,compression:'DEFLATE'});

    
    res.type('zip');
    res.send(Buffer.from(data, 'binary'));

    })
   } catch (error) {
    console.log('bad call ', error);
    next(error);
  }
});

module.exports = zippedBoilerPlate;
