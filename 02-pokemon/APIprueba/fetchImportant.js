async function fetchAPI(url){
    return (await fetch(url)).json();
}
async function Pokemon(url){//await only works on async functions
    PokemonImportant(await FetchAPI(url))
}
function PokemonImportant(poke){
    console.log(poke["name"])
    //const stats=["Hp","Atk","Dfs","SpAtk","SpDfs","Spd"]
    poke.stats.forEach(stat =>{
        console.log(stat.base_stat)
    })
    poke["types"].forEach(element => {
        console.log(element["type"]["name"])
    });
}
const url = "https://pokeapi.co/api/v2/pokemon/6";
try{
    Pokemon(url)
}catch(error){//Exception e in JavaScript
    console.error(error)
}
