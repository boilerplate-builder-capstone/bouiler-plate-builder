const { it, expect } = require('@jest/globals');
const supertest = require('supertest');
const app = require('../server/server');
const User = require('../server/db/models/User.js')
const {db} = require('../server/db')

const server = supertest(app);

beforeEach(async () => {
  await db.sync({ force: true });
});

describe('Server', () => {
  describe('User Model', () => {
    describe('validation', () => {

      //validate username
      it('requires `username`', async () => {
        const newUser = User.build();
        try {
          await newUser.validate();
          throw Error('validation was successful but should have failed without `username`')
        } catch(err){
          expect(err.message).toContain('username')
        }
      });

      //validate password
      it('requires `password`', async () => {
        const newUser = User.build();
        try {
          await newUser.validate();
          throw Error('validation was successful but should have failed without `password`')
        } catch(err){
          expect(err.message).toContain('password')
        }
      });

      //validate id
      it('requires `id`', async () => {
        const newUser = User.build();
        try {
          await newUser.validate();
          throw Error('validation was successful but should have failed without `id`')
        } catch(err){
          expect(err.message).toContain('id')
        }
      });
    })
  })
})
