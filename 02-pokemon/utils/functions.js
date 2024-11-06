async function FetchAPI(url){//await only works on async functions
    let response = await fetch(url);//use the url to get data from the API
    let result = await response.json()//Convert the data into usable JSON
    return result
}
async function PokemonRegion(region){
    //Saltar paso A si tienes el número
    //region can be string and it works too
    let result = await FetchAPI("https://pokeapi.co/api/v2/region/"+region):
  
    //En gen 9,10 u 11+ este code daría error
    result = await fetchAPI(result.main_generation.url)
    let pokeurls = [];
    result.pokemon_species.map(pokeobject => {
      pokeurls.push(pokeobject.url.replace('-species',''))
    })
    return pokeurls
}
/*
//Unused
async function regionsFetch(){
  let response = await fetch("https://pokeapi.co/api/v2/region");
  let regions = await response.json();
  let regiones = [];
  regions.results.foreach(region => {
    regiones.push(region.name);
  })
  return regiones;
}
async function getEvos(id){
    let cadena =await getChain(id)
    return evoMaker(cadena.chain)
}
async function getChain(id) {
    let response
    let result
    //Fetching the chain
    response = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + id);
    result = await response.json();
    id = result.evolution_chain.url.slice(42, result.evolution_chain.url.length - 1)

    //Fetching the Pókemons involved
    response = await fetch("https://pokeapi.co/api/v2/evolution-chain/" + id);
    result = await response.json();
    return result;
}
function evoMaker(cadena){
  let evos = []
  evos.push(cadena.species.name)
  //Bucles foreach... HACER Función loop aquí

  cadena.evolves_to.map(evo => {
    evos.push(evo.species.name)
    evo.evolves_to.map(evo2 => {
      evos.push(evo2.species.name)
    })
  })
  console.log(evos)
  return evos
}
*/