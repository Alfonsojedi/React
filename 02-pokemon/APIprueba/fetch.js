async function Pokemon(url){//await only works on async functions
    let response = await fetch(url);//use the url to get data from the API
    let result = await response.json()//Convert the data into usable JSON
    console.log(result)//Print result
}
const url = "https://pokeapi.co/api/v2/pokemon/treecko";
try{
    Pokemon(url)
}catch(error){//Exception e in JavaScript
    console.error(error)
}