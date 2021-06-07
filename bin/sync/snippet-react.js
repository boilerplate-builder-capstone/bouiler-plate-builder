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
      <% } else {%>
      <App />
      <% } %>
    );
    `,
  });
};

module.exports = syncReact;
