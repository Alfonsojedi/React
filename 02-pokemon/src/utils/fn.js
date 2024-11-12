async function fetchAPI(url){
  return (await fetch(url)).json();
}
async function PokeRegion(region){
    //Saltar paso A si tienes el número
    //region can be string and it works too
    let result = await fetchAPI("https://pokeapi.co/api/v2/region/"+region);//use the url to get data from the API
    //En gen 9,10 u 11+ este code daría error
    result = await fetchAPI(result.main_generation.url)
    let pokeurls = [];
    result.pokemon_species.map(pokeobj => {
      pokeurls.push(pokeobj.url.replace('-species',''))
    })
    return pokeurls
}
/*
async function regionsFetch(){
  let regions = await fetchAPI("https://pokeapi.co/api/v2/region");
  let regiones = [];
  regions.results.foreach(region => {
    regiones.push(region.name);
  })
  return regiones;
}
async function getEvos(id){
  let cadena = await getChain(id);
  return evoMaker(cadena.chain,{});
}
async function getChain(id) {//Fetch the chain in pokemon-species to get the true id/URL we need
  let result = await fetchAPI("https://pokeapi.co/api/v2/pokemon-species/"+id);
  id = result.evolution_chain.url.slice(42, result.evolution_chain.url.length-1);
  return await fetchAPI("https://pokeapi.co/api/v2/evolution-chain/"+id);
}
function evoMaker(cadena,evos){
  const value={};//Needed to get the full Object
  evos[cadena.species.name]=null;//Sin evos, para guardarlo usamos null
  cadena.evolves_to.map(evo => {evos[cadena.species.name]=evoMaker(evo,{value})})
  return evos;
}
*/