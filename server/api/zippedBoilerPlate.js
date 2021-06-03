const zippedBoilerPlate = require('express').Router();
const ejs = require('ejs')
const fs = require('fs')
const zip = new require('node-zip')()
const path = require('path')

//helper function designed to deal with multiple files in a directory folder
function zipHelper(fileString, arrObject){
    arrObject.forEach(file => zip.file(`${fileString}/${file.name}`, file.contents))

}

//helper function to create a string containing all imports. pass in an array of objects containing the {name, location}
function createImports(importObj){
    let context
    fs.readFile(path.join(__dirname, '..', '..', 'txtBoiler/inputs.txt'), 'utf8', (err, data)=>{
        context = ejs.render(data, {importsObj})
        
    })
    return context
}

function createAppjs(importObj){
    let contents = ""
    let name = "app.js"
    contents += createImports(importObj)

    fs.readFile(path.join(__dirname, '..', '..', 'txtBoiler/Reactcomponent.txt'), 'utf8', (err, data)=>{
        contents += "\n" + data
        
    })

    return {name, contents}
}


zippedBoilerPlate.get('/', async (req, res, next) => {
  try {


   
    
    //stopped here
    let appjs = createAppjs()

    let actionjs = {name: 'action.js', contents: "contents here"}
    let reducerjs = {name: 'reducer.js', contents: "contents here"}
    let rootreducerjs = {name: 'rootreducer.js', contents: "contents here"}
    let storejs = {name: 'store.js', contents: "contents here"}
   
    let htmlindexhtml = {name: 'htmlindex.html', contents: "contents here"}
    let clientindexjs = {name: 'index.js', contents: "contents here"}

    let stylecss = {name: 'style.css', contents: "contents here"}

    let modelnamejs = {name: 'modelname.js', contents: "contents here"}
    let modelsandrelationshipsjs = {name: 'modelsandrelationships.js', contents: "contents here"}
    let othermodelnamejs = {name: 'othermodelname.js', contents: "contents here"}

    let dbjs = {name: 'db.js', contents: "contents here"}
    let syncandseedjs = {name: 'syncandseed.js', contents: "contents here"}

    let individualrouterjs = {name: 'individualrouter.js', contents: "contents here"}

    let modifyserverjs = {name: 'modifyserver.js', contents: "contents here"}
    let startserverjs = {name: 'startserver.js', contents: "contents here"}

    let reactreduxObjectArray = [actionjs, reducerjs, rootreducerjs, storejs] 

    let clientObjectArray = [htmlindexhtml, clientindexjs]

    let publicObjectArray = [stylecss]

    let modelObjectArray = [modelnamejs, modelsandrelationshipsjs, othermodelnamejs]

    let dbObjectArray = [dbjs, syncandseedjs]

    let routesObjectArray = [individualrouterjs]

    let serverObjectArray = [modifyserverjs, startserverjs]

    zipHelper('client/reactredux', reactreduxObjectArray)
    zipHelper('client', clientObjectArray)
    zipHelper('public', publicObjectArray)
    zipHelper('server/db/models', modelObjectArray)
    zipHelper('server/db', dbObjectArray)
    zipHelper('server/routes', routesObjectArray)
    zipHelper('server', serverObjectArray)

    zip.file('.babelrc', "babelfile contents here")
    zip.file('package.json', "package file contents here")
    zip.file('webpack.config.js', "webpack contents here")
    zip.file('client/components/App.js', appjs)


    let data = zip.generate({base64:false,compression:'DEFLATE'});

    res.type('zip');
    res.send(Buffer.from(data, 'binary'));

  } catch (error) {
    console.log('bad call ', error);
    next(error);
  }
});

module.exports = zippedBoilerPlate;
