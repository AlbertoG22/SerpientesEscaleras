
class Dado {
    lanzar(){
        return Math.floor(Math.random()*6)+1;
    }
}

class Jugador{
    constructor(nombre){
        this.nombre=nombre;
        this.posicion=0;
    }
    avanzar(pasos, casillas){
        this.posicion = casillas[this.posicion + pasos];
    }
    getPosicion(){
        return this.posicion;
    }
}

class Tablero{
    constructor(){
        this.casillas=[];
    }
    llenarCasillas(){
        for (let i = 0; i <= 106; i++) {
            this.casillas.push(i);
        }

        this.asignarEscaleras();
        this.asignarSerpientes();

    }
    asignarEscaleras(){
        this.casillas[5]=58;
        this.casillas[14]=49;
        this.casillas[53]=72;
        this.casillas[64]=83;
    }
    asignarSerpientes(){
        this.casillas[38]=20;
        this.casillas[51]=10;
        this.casillas[76]=54;
        this.casillas[91]=73;
        this.casillas[97]=61;
    }
    
}

