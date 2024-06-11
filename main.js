const bg_image = {
    grass: 'url(https://example.com/grass.jpg)',
    fire: 'url(https://example.com/fire.jpg)',
    water: 'url(https://example.com/water.jpg)',
    bug: 'url(https://example.com/bug.jpg)',
    normal: 'url(https://example.com/normal.jpg)',
    flying: 'url(https://example.com/flying.jpg)',
    poison: 'url(https://example.com/poison.jpg)',
    electric: 'url(https://example.com/electric.jpg)',
    ground: 'url(https://example.com/ground.jpg)',
    fairy: 'url(https://example.com/fairy.jpg)',
    psychic: 'url(https://example.com/psychic.jpg)',
    fighting: 'url(https://example.com/fighting.jpg)',
    rock: 'url(https://example.com/rock.jpg)',
    dragon: 'url(https://example.com/dragon.jpg)',
    ice: 'url(https://example.com/ice.jpg)',
  };


// deneme

const poke_container= document.querySelector(".poke-container")
const search = document.querySelector(".search")
const searchBtn = document.querySelector(".searchBtn")
const searchInput = document.querySelector(".search-Input")
const pokemon_count  = 151

const bg_color = {
  grass: '#8BD369',
  fire: '#FF603F',
  water: '#3399FF',
  bug: '#AABB22',
  normal: '#AAAA99',
  flying: '#9AA8FA',
  poison: '#B76EA4',
  electric: '#FFD34E',
  ground: '#E2C56A',
  fairy: '#F1A8EC',
  psychic: '#FF6EA4',
  fighting: '#C56E5C',
  rock: '#C5B679',
  dragon: '#7766EE',
  ice: '#66CCFF',
}

// -----------------------------------------------
searchBtn.addEventListener("click", ()=>{
    search.classList.toggle("active")
})

searchInput.addEventListener("input",()=> {
    const searchValue = searchInput.value.toLowerCase()
    const pokemonNames= document.querySelectorAll(".poke-name")
    

    pokemonNames.forEach((pokemonName) => {
        if(pokemonName.innerHTML.toLocaleLowerCase().includes(searchValue)) {
             pokemonName.parentElement.parentElement.style.display="block"
        } else {
            pokemonName.parentElement.parentElement.style.display="none"
        }
    })
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

const createPokemonCard = (pokemon) =>  {
    const pokemonDiv = document.createElement("div")
    pokemonDiv.classList.add("pokemon")

const pokemonId = pokemon.id.toString().padStart(3,"0")

    const pokemonType = pokemon.types[0].type.name

    const pokemonBg = bg_color[pokemonType]
    pokemonDiv.style.backgroundColor = `${pokemonBg}`



    

    const pokemonDivInnerHTML = `
        
                <div  class="image-container pixel " >
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="Firs Pokemon">
            </div>
            <div class="poke-info">
                <span class="poke-id" >#${pokemonId}</span>
                <h3 class="poke-name">${pokemon.name}</h3>
                <div class="small">
                    <small class="poke-xp">
                        <img src="images/power.svg" alt="">${pokemon.base_experience}xp
                    </small>
                    <small class="poke-weight">
                        <img src="images/weight.svg" alt="">${pokemon.weight}kg
                    </small>
                    <div class="poke-type">
                        <img src="images/element.svg" alt=""> ${pokemonType}
                    </div>
                </div>
            </div>
    `
    pokemonDiv.innerHTML = pokemonDivInnerHTML
    poke_container.appendChild(pokemonDiv)
}

fetchPokemons()