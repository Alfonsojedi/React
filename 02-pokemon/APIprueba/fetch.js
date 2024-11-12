async function fetchAPI(url){
    return (await fetch(url)).json();
  }
let urls = ["https://pokeapi.co/api/v2/pokemon/151","https://pokeapi.co/api/v2/pokemon/koraidon"]
try{
    urls.forEach(url => fetchAPI(url));
}catch(error){//Exception e in JavaScript
    console.error(error)
}
