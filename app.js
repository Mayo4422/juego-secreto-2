let numeroSecreto=0;
let intentos=0;  
let numeroSorteados=[];
let numeroMaximo = 10;


function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);  
    if(numeroUsuario===numeroSecreto){
        asignarTextoElemento("p",`Acertaste el número en ${intentos}  ${(intentos===1)? "vez" : "veces"}`)
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor")
        }else{
            asignarTextoElemento("p","El número secreto es mayor")
        }
        
        intentos++;
        limpiar();
    }
    return;
}

function limpiar(){
document.querySelector("#valorUsuario").value="";
}

function generarNumeroSecreto(){
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    if(numeroSorteados.length == numeroMaximo){
asignarTextoElemento("p","Ya se sortearon todos los números posibles")

    }
    if(numeroSorteados.includes(numeroGenerado)){
    }else{
        numeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p",`indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;

}

function reiniciarJuego(){
//Limpiar la caja
limpiar();
//Indicar mensaje de lo que se necesita
//Generar el número aleatorio
//Inicializar el número de intentos
condicionesIniciales();
//Deshabilitar el botón de nuevo juego
document.querySelector("#reiniciar").setAttribute("disabled","true");


}

condicionesIniciales();