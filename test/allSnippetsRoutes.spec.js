const { it, expect } = require('@jest/globals');
const supertest = require('supertest');
const app = require('../server/server');
const Code = require('../server/db/models/Code.js')
const {db} = require('../server/db')

const server = supertest(app);

beforeEach(async () => {
  await db.sync({ force: true });
});

// describe('Testing Routes', () => {
//   describe('Home page', () => {
//     it('Home page responds with status 200', async () => {
//       const response = await server.get('/');
//       expect(response.status).toEqual(200);
//     });
//   });
// });

describe('AllSnippets Routes', () => {
  let storedSnippets;

  const snippetsData = [
    {
      id: 'R1',
      fileName: 'index.js',
      category: 'react',
      title: 'React: import',
      snippet: `
      import React from 'react';
      import ReactDOM from 'react-dom';
      `
    },
    {
      id: 'R2',
      fileName: 'index.js',
      category: 'react',
      title: 'React: ReactDOM',
      snippet: `
      ReactDOM.reander(
        <% if (react.react-redux) { %>
        <Provider store={store}>
          <App />
        </Provider>
        <% } else { %>
        <App />
        <% } %>
      );
      `
    }
  ];

  beforeEach(async () => {
    const createdSnippets = await Code.bulkCreate(snippetsData)
    storedSnippets = createdSnippets.map(snippet => snippet.dataValues)
  })

  //Route for fetching all snippets
  describe('GET `/api/all`', () => {
    it('serves up all snippets', async () => {
      const response = await server.get('/api/all');
      expect(response.status).toEqual(200);
      expect(response.body.length).toEqual(2);
      expect(response.body[0].id).toEqual(storedSnippets[0].id)
    });
  });
});
