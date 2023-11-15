export function Simbolo(state){
    //State es un Number que guarda el estado de la celda
    if (state==0){
        return <h1>+</h1>
    }else if(state==1){
        return <h1>X</h1>
    }else{
        return <h1>O</h1>
    }
}