window.onload = inicio;

// Corregidas las declaraciones de las constantes de imagen
const img1 = "img/sumas.jpg";
const img2 = "img/restas.jpg";
const img3 = "img/multi.jpg";
const img4 = "img/divisiones.jpg";
const fecha = new Date();

// Efectos de sonido
const sonido1 = new Audio("sounds/2.wav");
const sonidoGanador = new Audio("sounds/3.wav");
const sonidoError = new Audio("sounds/error.mp3");
const sonidoGameOver = new Audio("sounds/game over.mp3");

// Variables de juego (Se cambió sumaCorrecta por multiplicacionCorrecta)
let multiplicacionCorrecta;
let a;
let b;
let monedas = 0;
let fallas = 0;
let contador = 0;

function inicio(){
    preguntarMultiplicacion();
    dibujarMonedas();
    dibujarFallas();
   
    // Se mantienen los listeners aquí de forma limpia
    document.querySelector('#resultadoMultiplicacion').onclick = comprobarMultiplicacion;
    document.querySelector('#resultadoTotal').onclick = resultadoFinal;

    // CORREGIDO: El listener ahora está correctamente adentro de la función inicio()
    document.querySelector('.mult3').addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            comprobarMultiplicacion();
        }
    });
} // CORREGIDO: Aquí cierra adecuadamente la función inicio


function resultadoFinal(){
    let resul = monedas - fallas;
    
    if(resul > fallas){
        document.querySelector('.resultadoTotal2').style.display ='block';
        document.querySelector('.resultadoTotal2').innerHTML = `
            <div class="container text-center mt-3">
                <h4>Tu resultado Final es: <span class="badge bg-success">${resul}</span></h4> 
                <i class="bi bi-controller fs-2"></i><br>
                <img src="img/gif/victory.gif" class="img-fluid my-2" style="max-width:200px;"><br>
                <i class="bi bi-trophy-fill text-warning fs-1"></i> Eres un Master, sigue así campeón 
                <img src="img/gif/5.gif" style="max-width:50px;">
            </div>`;
        sonidoGanador.play();
    } else {
        document.querySelector('.resultadoTotal2').style.display ='block';
        document.querySelector('.resultadoTotal2').innerHTML = `
            <div class="container text-center mt-3">
                <h4>Tu resultado Final es: <span class="badge bg-danger">${resul}</span></h4> 
                <p class="text-danger fw-bold">⚠❌ Sigue practicando</p>
                <img src="img/gif/game over1.jpg" class="img-fluid my-2" style="max-width:200px;">
                <img src="img/gif/3.gif" class="img-fluid" style="max-width:50px;">
            </div>`;
        sonidoGameOver.play();  
    }

    // Ocultar elementos de forma masiva al terminar el juego
    document.querySelector('#resultadoMultiplicacion').style.display ='none';  
    document.querySelector('#resultadoTotal').style.display ='none';  
    document.querySelector('#inicio').style.display ='inline-block';  
    document.querySelector('.resultado').style.display ='none';
    document.querySelector('.mainMultiplicacion').style.display ='none';
    document.querySelector('.main2').style.display ='none';
    document.querySelector('.monedas').style.display ='none';
    document.querySelector('.fallas').style.display ='none';
}

// DIBUJAR MONEDAS (Una sola imagen + contador de aciertos)
function dibujarMonedas(){
    let m = document.querySelector(".monedas");
    // Insertamos la imagen y el número de monedas actuales usando un contenedor flex para alinearlos
    m.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
            <img class="kiko" src="img/1.png" style="width: 30px;">
            <span style="font-size: 20px; font-weight: bold; color: green;">x ${monedas}</span>
        </div>
    `;
}

// DIBUJAR FALLAS (Una sola imagen + contador de errores)
function dibujarFallas(){
    let f = document.querySelector(".fallas");
    // Insertamos la imagen y el número de fallas actuales alineados de la misma manera
    f.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
            <img class="kiko" src="img/2.jpg" style="width: 30px;">
            <span style="font-size: 20px; font-weight: bold; color: red;">x ${fallas}</span>
        </div>
    `;
}


// COMPROBAR MULTIPLICACIÓN
function comprobarMultiplicacion(){
    let c = Number(document.querySelector(".mult3").value);
    
    // Validación para evitar que envíen respuestas vacías
    if(document.querySelector(".mult3").value.trim() === "") {
        alert("Por favor, introduce un número antes de comprobar.");
        return;
    }

    if (c === multiplicacionCorrecta){
        document.querySelector('.resultado').innerHTML = `Resultado <span>${c}</span> es Correcto ✔🏆`;
        document.querySelector('.resultado').style.color = "rgb(43, 246, 25)";
        monedas++;
        sonido1.play();
    } else {
        document.querySelector('.resultado').innerHTML = `Incorrecto ❌😥, El Resultado correcto de ${a} ✖ ${b} es: <span>${multiplicacionCorrecta}</span>😎😑.`;
        document.querySelector('.resultado').style.color = "red";
        fallas++;
        sonidoError.play();
    }
    
    // Actualizar los contenedores gráficos de aciertos y errores
    dibujarMonedas();
    dibujarFallas();
    
    // Generar la siguiente pregunta automáticamente
    preguntarMultiplicacion();
}

function preguntarMultiplicacion(){
    // Genera números entre 0 y 9
    a = Math.floor(Math.random() * 10);
    b = Math.floor(Math.random() * 10);
    multiplicacionCorrecta = a * b;
    
    document.querySelector(".mult1").value = a;
    document.querySelector(".mult2").value = b;
    document.querySelector(".mult3").value = "";
    document.querySelector(".mult3").focus();
}


