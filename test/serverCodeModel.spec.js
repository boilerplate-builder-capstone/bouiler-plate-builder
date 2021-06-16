const { it, expect } = require('@jest/globals');
const supertest = require('supertest');
const app = require('../server/server');
const Code = require('../server/db/models/Code.js')
const {db} = require('../server/db')

const server = supertest(app);

beforeEach(async () => {
  await db.sync({ force: true });
});

describe('Server', () => {
  describe('Snippet Model', () => {
    describe('validation', () => {
      it('requires id', async () => {
        const newSnippet = Code.build();
        try {
          await newSnippet.validate();
          throw Error('Snippet create succeeded but should have failed')
        } catch(err){
          expect(err.message).toContain('id')
        }
      });
      it('requires fileName', async () => {
        const newSnippet = Code.build();
        try {
          await newSnippet.validate();
          throw Error('Snippet create succeeded but should have failed')
        } catch(err){
          expect(err.message).toContain('fileName')
        }
      });
      it('requires category', async () => {
        const newSnippet = Code.build();
        try {
          await newSnippet.validate();
          throw Error('Snippet create succeeded but should have failed')
        } catch(err){
          expect(err.message).toContain('category')
        }
      });
      it('requires title', async () => {
        const newSnippet = Code.build();
        try {
          await newSnippet.validate();
          throw Error('Snippet create succeeded but should have failed')
        } catch(err){
          expect(err.message).toContain('title')
        }
      })
    })
  })
})
