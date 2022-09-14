const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const client = require('../utils/redisClient')

router.get('/:pokemonId', async function (req, res, next) {
    try {
        //if (!client.connected) await client.connect()
        const reply = await client.get(req.originalUrl)
        //client.quit()
        if (reply) return res.json(JSON.parse(reply))

        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.pokemonId}`)
        data = await data.json()

        await client.set(req.originalUrl, JSON.stringify(data))
        //client.quit()
        res.json(data)
    } catch (err) {
        console.error(err)
    }
})

router.get('/type/:pokemonType', async function (req, res, next) {
    try {
        //if (!client.connected) await client.connect()
        const reply = await client.get(req.originalUrl)
        //client.quit()
        if (reply) return res.json(JSON.parse(reply))

        let data = await fetch(`https://pokeapi.co/api/v2/type/${req.params.pokemonType}`)
        data = await data.json()

        await client.set(req.originalUrl, JSON.stringify(data))
        //client.quit()
        res.json(data)
    } catch (err) {
        console.error(err)
    }
})

module.exports = router