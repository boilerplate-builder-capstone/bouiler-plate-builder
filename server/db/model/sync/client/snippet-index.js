const ReactModel = require('../../code_snippets/model-react');

const syncReact = async () => {
  const r1 = await ReactModel.create({
    id: 'R1',
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
      <% } else {%>
        <App />
      <% } %>
    );
    `,
  });
};

module.exports = syncReact;
