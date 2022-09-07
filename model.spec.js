const { expect } = require('chai');
const { Artist, Song, conn, syncAndSeed} = require('./db');

describe('Models', () => {
  let seed;
  beforeEach(async() => {
    seed = await syncAndSeed()
  })
  describe('seeded data', () => {
    it('includes four artists', () => {
      expect(seed.artists.length).to.equal(4)
    });
    it('includes four songs', () => {
        expect(seed.songs.length).to.equal(4)
      });
    it('includes four songs', () => {
    expect(typeof seed.songs[0]['duration']).to.equal('number')
    })
  })
})