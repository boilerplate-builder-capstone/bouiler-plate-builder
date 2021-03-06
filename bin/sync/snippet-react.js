const Code = require('../../server/db/models/Code');

const syncReact = async () => {
  const r1 = await Code.create({
    id: 'R1',
    fileName: 'index.js',
    category: 'react',
    title: 'React: index',
    snippet: `import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
<% if (react.redux) { -%>
import { Provider } from 'react-redux'; 
import store from './reactredux/store'; 
<% } -%>

const root = document.getElementById('root');

ReactDOM.render(
<% if (react.redux) { -%>
  <Provider store={store}>
    <App />
  </Provider>,
  root
<% } else { -%>
  <App />,
  root
<% } -%>
);
`,
  });

  const r2 = await Code.create({
    id: 'R2',
    fileName: 'App.js',
    category: 'react',
    title: 'React: app',
    snippet: `import React, { Component } from 'react';
<% if(react.reactRouter) { -%>
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
<% } -%>
<% if (react.redux) { -%>
import { connect } from 'react-redux';
<% } -%>
<% if (react.reacthooks) { -%>
import HooksComponent from './HooksComponent';
<% } -%>

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
<% if (react.reacthooks) { -%>
        <HooksComponent />
<% } -%>
<% if(react.reactRouter) { -%>
        <Router>
          {/* <Route component={YourComponentName} path="/path" /> */}
          <Switch>
          {/* <Route component={YourComponentName2} path="/path2" /> */}
          </Switch>
        </Router>
<% } -%>
      </div>
    )
  }
}

<% if (react.redux) { -%>
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
<% } else { -%>
export default (App)
<% } -%>
`,
});

  const r3 = await Code.create({
    id: 'R3',
    fileName: 'actions.js',
    category: 'react',
    title: 'React-Redux: action creator',
    snippet: `import axios from 'axios'
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

  const r4 = await Code.create({
    id: 'R4',
    fileName: 'reducer.js',
    category: 'react',
    title: 'React-Redux: single reducer',
    snippet: `const YOUR_COMMAND = 'YOUR_COMMAND'

const singleReducer = (state = [], action) => {
    if (action.type === YOUR_COMMAND){
        // Use the action's data to modify state
        state = [...state, action.data]
    }
    return state
}

export default singleReducer;
    `,
  });

  const r5 = await Code.create({
    id: 'R5',
    fileName: 'rootreducer.js',
    category: 'react',
    title: 'React-Redux: root reducer',
    snippet: `// combine all your reducers here

import { combineReducers } from 'redux'
import singleReducer from './reducer'

const rootReducer = combineReducers({
    stateName: singleReducer
});

export default rootReducer;
    `,
  });

  const r6 = await Code.create({
    id: 'R6',
    fileName: 'store.js',
    category: 'react',
    title: 'React-Redux: store',
    snippet: `import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './rootreducer'

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
)

export default store
`,
  });

  const r7 = await Code.create({
    id: 'R7',
    fileName: 'webpack.config.js',
    category: 'react',
    title: 'React: webpack',
    snippet: `const path = require('path');
 
module.exports = { 
  mode: 'development',
  devtool: 'source-map',
  entry: './client/index.js',
  output: {
    filename: './public/bundle.js',
    path: __dirname,
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          presets: ['@babel/preset-react']
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  }
};
`,
  });

  const r8 = await Code.create({
    id: 'R8',
    fileName: 'HooksComponent.js',
    category: 'react',
    title: 'React: hooks component',
    snippet: `import React, { useState, useEffect } from 'react';

function HooksComponent() {
  const [state, setState] = useState("starting state");

  useEffect(() => {
    // function that executes upon component mounting
  });

  return (
    <h2>This is your hooks component!</h2>
  )
}

export default HooksComponent
`,
});
};

module.exports = syncReact;

