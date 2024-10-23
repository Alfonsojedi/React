/*
function PokemonKanto(){
    for(let i=1; i<=151; i++){
        try{
            Pokemon("https://pokeapi.co/api/v2/pokemon/"+i)
        }catch(error){//Exception e in JavaScript
            console.error(error)
        }
    }
}
*/
async function Pokemon(url){//await only works on async functions
    let response = await fetch(url);//use the url to get data from the API
    let result = await response.json()//Convert the data into usable JSON
    return result
}
async function PokemonRegion(region){
    //Saltar paso A si tienes el número
    //region can be string and it works too
    let response = await fetch("https://pokeapi.co/api/v2/generation/"+region);//use the url to get data from the API
    let result = await response.json()

    //En gen 9,10 u 11+ este code daría error
    response = await fetch(result.main_generation.url)
    result = await response.json()
    let pokeurls = [];
    result.pokemon_species.map(pokeobject => {
        pokeurls.push(pokeobject.url)
    })
    return genobject
    
}
try{
    const urls = PokemonRegion("kanto")
    let pokemons = []
    pokemons.push(urls.map(url => Pokemon(url)))
}catch(error){//Exception e in JavaScript
    console.error(error)
}
