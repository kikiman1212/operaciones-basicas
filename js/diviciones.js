window.onload = inicio;

// CORREGIDO: Sintaxis de constantes de imagen limpia
const img1 = "img/sumas.jpg";
const img2 = "img/restas.jpg";
const img3 = "img/multi.jpg";
const img4 = "img/divisiones.jpg";
const fecha = new Date();

const sonido1 = new Audio("sounds/2.wav");
const sonidoGanador = new Audio("sounds/3.wav");
const sonidoError = new Audio("sounds/error.mp3");
const sonidoGameOver = new Audio("sounds/game over.mp3");

let divicionCorrecta; // Cambiado a la lógica de división
let a;
let b;
let monedas = 0;
let fallas = 0;
let contador = 0;

function inicio(){
   preguntarDivicion();
   dibujarMonedas();
   dibujarFallas();
   
   document.querySelector('#resultadoDivicion').onclick = comprobarDivicion;
   document.querySelector('#terminar').onclick = resultadoFinal;

   // NUEVO: Escuchar la tecla Enter para comprobar la división
   document.querySelector('.divi3').addEventListener('keydown', function(event) {
       if (event.key === "Enter") {
           comprobarDivicion();
       }
   });
}

function resultadoFinal(){
    let resul = monedas - fallas;
    if(resul > fallas){
        document.querySelector('.resultadoTotal2').style.display ='flex';
        document.querySelector('.resultadoTotal2').innerHTML = `Tu resultado Final es: <span>${resul}</span> 🏆 Eres un Master sigue asi campeón<img src="img/gif/victory.gif"> <img src="img/gif/5.gif" >`;
        sonidoGanador.play();
    } else {
        document.querySelector('.resultadoTotal2').style.display ='flex';
        document.querySelector('.resultadoTotal2').innerHTML = `Tu resultado Final es: <span>${resul}</span> ⚠❌ Sigue practicando <img src="img/gif/game over1.jpg"><img src="img/gif/3.gif">`;
        sonidoGameOver.play(); 
    }

    // CORREGIDO: Ahora oculta correctamente #resultadoDivicion en ambos casos
    document.querySelector('.resultado').style.display ='none';
    document.querySelector('.monedas').style.display ='none';
    document.querySelector('.fallas').style.display ='none';
    document.querySelector('.main2').style.display ='none';
    document.querySelector('#resultadoDivicion').style.display ='none';
    document.querySelector('#terminar').style.display ='none';
    document.querySelector('#inicio').style.display ='flex';
}

// CORREGIDO: Una sola imagen con contador numérico
function dibujarMonedas(){
    let m = document.querySelector(".monedas");
    m.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
            <img class="kiko" src="img/1.png" style="width: 30px;">
            <span style="font-size: 20px; font-weight: bold; color: green;">x ${monedas}</span>
        </div>
    `;
}

// CORREGIDO: Una sola imagen con contador numérico
function dibujarFallas(){
    let f = document.querySelector(".fallas");
    f.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
            <img class="kiko" src="img/2.jpg" style="width: 30px;">
            <span style="font-size: 20px; font-weight: bold; color: red;">x ${fallas}</span>
        </div>
    `;
}

function comprobarDivicion(){
    let c = Number(document.querySelector(".divi3").value);
    
    // Validación para no enviar respuestas vacías
    if(document.querySelector(".divi3").value.trim() === "") {
        alert("Por favor, introduce un número antes de comprobar.");
        return;
    }

    if (c == divicionCorrecta){
        document.querySelector('.resultado').innerHTML = `Resultado <span>${c}</span> es Correcto ✔🏆`;
        document.querySelector('.resultado').style.color = "rgb(43, 246, 25)";
        monedas++;
        sonido1.play();
    } else {
        // CORREGIDO: Ya no requiere .toFixed(2) porque siempre son números enteros enteros
        document.querySelector('.resultado').innerHTML = `Resultado de <span>${c}</span> es Incorrecto ❌😥, El Resultado correcto de ${b} ➗ ${a} es: <span>${divicionCorrecta}</span>😎😑.`;
        document.querySelector('.resultado').style.color = "red";
        fallas++;
        sonidoError.play();
    }
    
    dibujarMonedas();
    dibujarFallas();
    preguntarDivicion();
}

// CORREGIDO: Nueva lógica para asegurar divisiones exactas y evitar dividir entre 0
function preguntarDivicion(){
    a = Math.floor(Math.random() * 9) + 1;          // Divisor: Número del 1 al 9 (Nunca será 0)
    divicionCorrecta = Math.floor(Math.random() * 10); // Resultado exacto: Número del 0 al 9
    b = a * divicionCorrecta;                       // Dividendo: Se calcula multiplicando ambos

    document.querySelector(".divi1").value = b;     // Muestra el número grande
    document.querySelector(".divi2").value = a;     // Muestra el número que divide
    document.querySelector(".divi3").value = "";
    document.querySelector(".divi3").focus();
}

