const Sequelize = require('sequelize');
const { UUID, UUIDV4, STRING, INTEGER } = Sequelize;

const conn = new Sequelize('postgres://localhost/music-api-testing-db')

const Artist = conn.define('artist', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: STRING,
        allowNull: false
    }
});

const Song = conn.define('song', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: STRING,
        allowNull: false
    },
    duration: {
        type: INTEGER
    }
});

Song.belongsTo(Artist);
Artist.hasMany(Song);

const syncAndSeed = async() => {
    await conn.sync({force: true})

    const [ramir, eli, beejay, emily] = await Promise.all([
    Artist.create({name: 'Ramir'}),
    Artist.create({name: 'Eli'}),
    Artist.create({name: 'Beejay'}),
    Artist.create({name: 'Emily'}),
   ]);

   await Promise.all([
    Song.create({name: 'the best', duration: 120, artistId: ramir.id}),
    Song.create({name: 'Best eater during class', duration: 90, artistId: eli.id}),
    Song.create({name: 'The wise', duration: 55, artistId: beejay.id}),
    Song.create({name: 'In the universe at this', duration: 78, artistId: emily.id}),
   ]);

   return {artists: await Artist.findAll(), songs: await Song.findAll()}
}

module.exports = {
    Artist, 
    Song,
    conn,
    syncAndSeed
}