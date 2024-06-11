const poke_container= document.querySelector(".poke-container")
const search = document.querySelector(".search")
const searchBtn = document.querySelector(".searchBtn")
const searchInput = document.querySelector(".search-Input")
const pokemon_count  = 151

// -----------------------------------------------
searchBtn.addEventListener("click", ()=>{
    search.classList.toggle("active")
})

const fetchPokemons = async()=> {
    for( let i = 1; i <pokemon_count; i++){
        await getPokemon(i)
    }
}

const getPokemon = async (id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data)
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) =>  {}

fetchPokemons()