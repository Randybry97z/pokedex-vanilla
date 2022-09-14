

module.exports = getAllPokemon = async () => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')

    return data.json()
}

/**
 * 
 * @param {string} pokemonId 
 * @returns {object}
 */
 module.exports = getOnePokemon = async (pokemonId) => {
    
}