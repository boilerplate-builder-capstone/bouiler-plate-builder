const Code = require('../../server/db/models/Code');

const syncReact = async () => {
  const r1 = await Code.create({
    id: 'R1',
    fileName: 'index.js',
    category: 'react',
    title: 'React: index',
    snippet: `
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
<% if (react.react-redux) { %>
import { Provider } from 'react-redux'; 
import store from './reactredux/store'; 
  <% } %>

const root = document.getElementById('root');

ReactDOM.reander(
  <% if (react.react-redux) { %>
  <Provider store={store}>
    <App />
  </Provider>
  <% } else { %>
  <App />
  <% } %>
);
    `,
  });

  const r2 = await Code.create({
    id: 'R2',
    fileName: 'App.js',
    category: 'react',
    title: 'React: app',
    snippet: `
import React, { Component } from 'react'
<% if(react.reactRouter) { %>
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
<% } %>

class App extends Component {
    constructor(props){
        super(props)
        this.state = null
    }

    // componentDidMount(){}

    // componentDidUpdate(){}

    render(){
        return(
            <div>
                <h1>Hello world</h1>
                <p>Welcome to your web app!</p>
                <% if(react.reactRouter) { %>
                <Router>
                    {/* <Route component={YourComponentName} path="/path" /> */}
                    <Switch>
                        {/* <Route component={YourComponentName2} path="/path2" /> */}
                    </Switch>
                </Router>
                <% } %>
            </div>
        )
    }
}

<% if (react.react-redux) { %>
const mapStateToProps = (state) => {
    return {
        stateName: state.stateName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        functionName: () => dispatch(functionFromDispatch())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
<% } else { %>
export default (App)
<% } %>
    `,
  });
  const r3 = await Code.create({
    id: 'R3',
    fileName: 'actions.js',
    category: 'react',
    title: 'React-Redux: action creator',
    snippet: `
import axios from 'axios'
const YOUR_COMMAND = 'YOUR_COMMAND'

const actionCreator = (data) => {
    return {
        type: YOUR_COMMAND,
        data
    }
}

export const someThunk = (input) => {
    return async(dispatch) => {
        try {
            const data = (await axios.get('/pathName')).data
            dispatch(actionCreator(data))
        } catch (error) {
            console.log(error)
        }
    }
}
      `,
  });
};

module.exports = syncReact;
