export const getPokemon = async () => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')

    return data.json()
}