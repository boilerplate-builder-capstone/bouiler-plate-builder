const zippedBoilerPlate = require('express').Router();
const ejs = require('ejs')
const fs = require('fs')
const zip = new require('node-zip')()
const path = require('path')

//helper function designed to deal with multiple files in a directory folder
function zipHelper(fileString, arrObject){
    arrObject.forEach(file => zip.file(`${fileString}${file.name}`, file.contents))

}

function createFile(filename, variable, ext){
    let name = `${filename}.${ext}`
    

    let data = fs.readFileSync(path.join(__dirname, '..', '..', `txtBoiler/${filename}.txt`), 'utf8')
    let contents = ejs.render(data, variable)
        

    return {name, contents}
}

zippedBoilerPlate.get('/', async (req, res, next) => {
  try {

    let appjs = createFile('App', {router: true, redux: true}, 'js')
    
    let actionjs = createFile('Action', {}, 'js')
    let reducerjs = createFile('Reducer', {}, 'js')
    let rootreducerjs = createFile('RootReducer', {}, 'js')
    let storejs = createFile('Store', {}, 'js')
   
    let htmlindexhtml = createFile('htmlIndex', {react: true}, 'html')
    let clientindexjs = createFile('index', {redux: true}, 'js')

    let stylecss = {name: 'style.css', contents: "contents here"}

    let modelnamejs = createFile('modelname', {}, 'js')
    let modelsandrelationshipsjs = createFile('modelsandrelationships', {}, 'js')
    let othermodelnamejs = createFile('othermodelname', {}, 'js')

    let dbjs = createFile('db', {}, 'js')
    let syncandseedjs = createFile('syncandseed', {}, 'js')

    let individualrouterjs = createFile('individualrouter', {}, 'js')

    let modifyserverjs = createFile('modifyserver', {router: true}, 'js')
    let startserverjs = createFile('startserver', {database: true}, 'js')

    let babel = createFile('.babelrc', {}, '')
    let package = createFile('webpack', {}, 'config.js')
    let webpack = createFile('package', {database: true, react: true, redux: true }, 'json')

    let reactreduxObjectArray = [actionjs, reducerjs, rootreducerjs, storejs] 

    let clientObjectArray = [htmlindexhtml, clientindexjs]

    let publicObjectArray = [stylecss]

    let modelObjectArray = [modelnamejs, modelsandrelationshipsjs, othermodelnamejs]

    let dbObjectArray = [dbjs, syncandseedjs]

    let routesObjectArray = [individualrouterjs]

    let serverObjectArray = [modifyserverjs, startserverjs]

    let configObjectArray = [babel, package, webpack]

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
