const  app  = require('supertest')(require('./server'));
const { expect } = require('chai');


describe('Routes', () => {
    describe('Artists API route', () => {
      it('returns all artist', async() => {
        const response = await app.get('/api/artists')
        expect(response.body.length).to.equal(4)
      });
      it('returns a 200 status', async() => {
        const response = await app.get('/api/artists')
        expect(response.status).to.equal(200)
      });
    });
    describe('Songs API route', () => {
        it('returns all songs', async() => {
          const response = await app.get('/api/songs')
          expect(response.body.length).to.equal(4)
        });
        it('returns a 200 status', async() => {
          const response = await app.get('/api/songs')
          expect(response.status).to.equal(200)
        });
      })
  })