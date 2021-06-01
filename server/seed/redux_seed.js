const {db, models: { Redux } } = require('../db/db')

const init = async () =>{
    try{
        await Redux.create({id: 'IndexR1', snippet: 'import <% importName %> from "<% importFrom %>"'})
        await Redux.create({id: 'IndexR2', snippet: 'const initialState = { <% stateName %>: <% intialStateValue 5 %>}'})
        await Redux.create({id: 'IndexR3', snippet: 'export const reducer = combineReducers({ <% stateName %>: <% stateReducer %>,})'})
        await Redux.create({id: 'IndexR4', snippet: 'const store = createStore(<% storeValues %>);'})
        await Redux.create({id: 'IndexR5', snippet: 'export default {<% exports %>}'})
    } catch(er){
        console.log(er)
    }
}

module.exports = init;