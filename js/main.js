//Crea elemento divGeneral

let divGeneral = document.createElement("div");
document.body.appendChild(divGeneral);

//Creando un elemento H1 dentro de divGeneral
let tituloPagina= document.createElement("h1");
tituloPagina.innerText= "Frases Game of Thrones";
divGeneral.appendChild(tituloPagina);

//Creando un elemento h2 dentro de divGeneral

let subtituloPagina= document.createElement("h2");
subtituloPagina.innerText= "Página creada desde DOM";
divGeneral.appendChild(subtituloPagina);

//frases
let frase1 = "La mente necesita libros como la espada necesita una piedra de afilar si quiere mantener su agudeza. (Tyrion Lannister)";
let frase2 = "Cualquier hombre que deba decir ‘soy el rey’, no es un verdadero rey. (Tywin Lannister)";
let frase3 = "El león no se molesta con las opiniones de las ovejas. (Tywin Lannister)";

//Parrafos
let parrafo = document.createElement("p");




//Creando un div dentro de DivGeneral para ser contendor de Botones

let contenedorBotones = document.createElement("div");
divGeneral.appendChild(contenedorBotones);
contenedorBotones.setAttribute('class','btn-group');

// creando un div dentro de DivGeneral para ser contendor de el texto

let contenedorTexto = document.createElement("div");
divGeneral.appendChild(contenedorTexto);

//crando un p dentro de contendorTexto
contenedorTexto.appendChild(parrafo);

//Creando botones

let boton1 = document.createElement("button");
boton1.type = "button";
boton1.innerText = "Clic para frase 1";
boton1.setAttribute('class', 'btn btn-primary btn-sm');

let boton2 = document.createElement("button");
boton2.type = "button";
boton2.innerText = "Clic para frase 2";
boton2.setAttribute('class', 'btn btn-primary btn-sm');

let boton3 = document.createElement("button");
boton3.type = "button";
boton3.innerText = "Clic para frase 3";
boton3.setAttribute('class', 'btn btn-primary btn-sm');

let arregloBotones = [boton1, boton2, boton3];

arregloBotones.forEach((botonHTML)=>{
contenedorBotones.appendChild(botonHTML);
});



//Creando ids
contenedorTexto.setAttribute('id','contenedor-texto');
contenedorBotones.setAttribute('id','contenedor-botones');
parrafo.setAttribute('id','parrafo');
boton1.setAttribute('id','boton-1');
boton2.setAttribute('id','boton-2');
boton3.setAttribute('id','boton-3');

//Creando clases
/*
contenedorBotones.classList.add("btn-group");
boton1.classList.add("btn btn-outline-primary");
boton2.classList.add("btn btn-secondary");
boton3.classList.add("btn btn-secondary");
*/

//funcion

function escribir(parametro){
    let fraseAgregar = parametro;
    document.getElementById("parrafo").innerHTML=fraseAgregar;
}

document.getElementById("boton-1").onclick = function(){
    escribir(frase1);
}
document.getElementById("boton-2").onclick = function(){
    escribir(frase2);
}
document.getElementById("boton-3").onclick = function(){
    escribir(frase3);
}


