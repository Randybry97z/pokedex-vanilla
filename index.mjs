import {Pokemon} from './components/pokemon.js'

let container = document.getElementById('app')
let pokemonObject = new Pokemon()

let pokemonData = Promise.resolve(pokemonObject.getOnePokemon('moltres'))

pokemonData.then((data) => {
    const pokemonName = container.querySelector('.pokemonName')
    const pokemonNumber = container.querySelector('.pokemonNumber')
    const pokemonTypes = container.querySelector('.pokemonTypes')
    const pokemonImage = container.querySelector('.pokemonImage')
    console.log(data)
    pokemonName.innerHTML += `<h1>${data.name.toUpperCase()}</h1>`
    pokemonNumber.innerHTML += `<h4>${data.id}</h4>`
    data.types.map((dataTypes, idx)=> {
        const {type} = dataTypes
        pokemonTypes.innerHTML += `<span id=${type.name}>${type.name}</span>`
    })
    pokemonImage.innerHTML += `<img src="${data.sprites['front_default']}" class="pokemonImageElement" />`
})