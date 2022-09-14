const express = require('express');
const pokemonRoutes = require('./routes/routes');
const client = require('./utils/redisClient')

const app = express();
client.connect().then(() => {
    app.use(express.json());
    app.use('/pokemon',pokemonRoutes)
}).catch(err => {
    res.json(err);
    res.status(400).send('Oops! cache not working')
})


app.listen(8080);