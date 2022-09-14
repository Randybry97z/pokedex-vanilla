const { getAllPokemon, getOnePokemon } = require('../utils/getData.js')

export class Pokemon {
    __construct(){
        return new Pokemon();
    }

    test(){
        return 'Hola test'
    }

    /**
     * @param {string} pokemonId
     * @returns {Promise} Promise object represents the data obtained from the PokeAPI
    */
    getOnePokemon(pokemonId){
        return getOnePokemon(pokemonId)
    }
}