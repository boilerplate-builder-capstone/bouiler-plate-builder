`import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
<% if(react-redux) { %>
   import { Provider } from 'react-redux'; 
   import store from './reactredux/store'; 
  <% } %>

const root = document.getElementById('root');

ReactDOM.reander(
  <Provider store={store}>
    <App />
  </Provider>
);
`;
