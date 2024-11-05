async function Pokemon(url){//await only works on async functions
    let response = await fetch(url);//use the url to get data from the API
    let result = await response.json()//Convert the data into usable JSON
    console.log(result)//Print result
}
let urls = ["https://pokeapi.co/api/v2/pokemon/151","https://pokeapi.co/api/v2/pokemon/koraidon"]
try{
    urls.forEach(url => Pokemon(url));
}catch(error){//Exception e in JavaScript
    console.error(error)
}
