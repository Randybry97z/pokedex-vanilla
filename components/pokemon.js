import { getAllPokemon, getOnePokemon } from '../utils/getData.js'

export class Pokemon {
    __construct(){
        return new Pokemon();
    }

    test(){
        return 'Hola test'
    }

    getOnePokemon(pokemonName){
        return getOnePokemon(pokemonName)
    }
}