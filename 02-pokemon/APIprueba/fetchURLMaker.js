async function FetchAPI(url){//await only works on async functions
    let response = await fetch(url);//use the url to get data from the API
    let result = await response.json()//Convert the data into usable JSON
    return result
}
async function PokeRegion(region){
    //Saltar paso A si tienes el número
    //region can be string and it works too
    //use the url to get data from the API
    let result = await FetchAPI("https://pokeapi.co/api/v2/generation/"+region))
    //En gen 9+ este code daría error
    result = await FetchAPI(result.main_generation.url);
    let pokeurls = [];
    result.pokemon_species.map(pokeobject => {
        pokeurls.push(pokeobject.url)
    })
    return pokeurls
}

try{
    const urls = PokeRegion("kanto")
    let pokemons = []
    pokemons.push(urls.map(url => FetchAPI(url)))
}catch(error){//Exception e in JavaScript
    console.error(error)
}
