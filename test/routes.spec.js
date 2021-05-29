const { it, expect } = require('@jest/globals');
const supertest = require('supertest');
const app = require('../server/server');

const server = supertest(app);

describe('This is a blank test', () => {
  it('should pass', () => {
    expect(1 + 2).toEqual(3);
  });
});

describe('Testing Routes', () => {
  describe('Home page', () => {
    it('Home page responds with status 200', async () => {
      const response = await server.get('/');
      expect(response.status).toEqual(200);
    });
  });
});
// note
