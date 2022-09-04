export const getAllPokemon = async () => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')

    return data.json()
}

export const getOnePokemon = async (pokemonName) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    return data.json()
}