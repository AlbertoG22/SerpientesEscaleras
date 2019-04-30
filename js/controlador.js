let tablero = new Tablero();
tablero.llenarCasillas();
let jugador1 = new Jugador('Lorena');
let jugador2 = new Jugador('Alberto');
let dado = new Dado();

document.getElementById("btnPlayer1").addEventListener("click", ( )=>{

    moverJugador(jugador1, tablero.casillas);

});

document.getElementById("btnPlayer2").addEventListener("click", ( )=>{
    moverJugador(jugador2, tablero.casillas);
});

let moverJugador = (jugador, casillas) => {

    let valorDado = dado.lanzar();
    jugador.avanzar(valorDado, casillas);
    console.log(jugador.getPosicion());

    if (jugador==jugador1) {
        document.getElementById("movimientos").innerHTML+= `Dado: ${valorDado} <br> Jugador 1: ${jugador1.nombre} está en ${jugador.getPosicion()} <br>`;
        document.getElementById("movimientos").innerHTML+= `------------------------------------ <br>`;
        if(jugador.getPosicion()>=100){
        document.getElementById("movimientos").innerHTML+= `¡Felicidades, ya ganaste!`;
        }
    }
    else{
        document.getElementById("movimientos").innerHTML+= `Dado: ${valorDado} <br> Jugador 2: ${jugador2.nombre} está en ${jugador.getPosicion()} <br>`;
        document.getElementById("movimientos").innerHTML+= `------------------------------------ <br>`;
        if(jugador.getPosicion()>=100){
        document.getElementById("movimientos").innerHTML+= `¡Felicidades, ya ganaste!`;
        }
    }
}