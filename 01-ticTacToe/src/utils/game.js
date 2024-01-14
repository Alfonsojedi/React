function Game (board,player){
    if (player=="X"){
        console.log("Jugador 1")
    }else{
        console.log("Jugador 2")
    }
    //board.append(Player)
}
function Start(){
    let board = [[,,],[,,],[,,]]
    let win=false
    Game(board,"X")
    for (let index = 0; index < 4; index++) {
        Game(board,"O")
        if (win){
            break
        }
        Game(board,"X")
        if (win){
            break
        }
    }
    console.log("Empate")

}
Start()