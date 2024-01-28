async function Pokemon(url){//await only works on async functions
    let response = await fetch(url);
    let result = await response.json()
    //console.log(result)
    PokemonImportant(result)
}
function PokemonImportant(result){
    console.log(result["name"])
    //const stats=["Hp","Atk","Dfs","SpAtk","SpDfs","Spd"]
    for (let i=0; i<6; i++) {
        console.log(result["stats"][i]["base_stat"])    
    }

    result["types"].forEach(element => {
        console.log(element["type"]["name"])
    });
}
function PokemonUsed(result){
    //Sacar todos los datos que quiera mostrar al usuario
    console.log(result["name"])
    //const stats=["Hp","Atk","Dfs","SpAtk","SpDfs","Spd"]
    for (let i=0; i<6; i++) {
        console.log(result["stats"][i]["base_stat"])    
    }

    result["types"].forEach(element => {
        console.log(element["type"]["name"])
    });
}
const url = "https://pokeapi.co/api/v2/pokemon/6";
try{
    Pokemon(url)
}catch(error){//Exception e in JavaScript
    console.error(error)
}