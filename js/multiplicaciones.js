
window.onload = inicio;

const img1 = src="img/sumas.jpg";
const img2 = src="img/restas.jpg";
const img3 = src="img/multi.jpg";
const img4 = src="img/divisiones.jpg";
const fecha = new Date();
const sonido1 = new Audio("sounds/2.wav");
const sonidoGanador = new Audio("sounds/3.wav");
const sonidoError = new Audio("sounds/error.mp3");
const sonidoGameOver = new Audio("sounds/game over.mp3");


let sumaCorrecta;
let a;
let b;
let monedas = 0;
let fallas = 0;
let contador = 0;


function inicio(){
   preguntarMultiplicacion();
   dibujarMonedas();
   dibujarFallas();
   
    document.querySelector('.comprueba').onclick = comprobar;
    document.querySelector('.compruebaMultiplicacion').onclick = comprobarMultiplicacion;
    document.querySelector('.resultadoTotal').onclick = resultadoFinal;
}

function resultadoFinal(){
        let resul = monedas - fallas;
	if(resul > fallas){
	document.querySelector('.resultadoTotal2').style.display ='flex';
	document.querySelector('.resultadoTotal2').innerHTML = (`Tu resultado Final es:<span>${resul}</span> 🏆 Eres un Master sigue asi campeón<img src="img/gif/victory.gif"> <img src="img/gif/5.gif" >`);
	sonidoGanador.play();
document.querySelector('.resultado').style.display ='none';
document.querySelector('.mainMultiplicacion').style.display ='none';
document.querySelector('.main2').style.display ='none';
document.querySelector('.monedas').style.display ='none';
document.querySelector('.fallas').style.display ='none';
}else{
document.querySelector('.resultado').style.display ='none';
document.querySelector('.monedas').style.display ='none';
document.querySelector('.fallas').style.display ='none';
document.querySelector('.resultadoTotal2').style.display ='flex';
document.querySelector('.resultadoTotal2').innerHTML = (`Tu resultado Final es:<span > ${resul}</span> ⚠❌ Sigue practicando <img src="img/gif/game over1.jpg"><img src="img/gif/3.gif">`);
sonidoGameOver.play();        
}

}



////////////////////////////////////////////////////////////////- MONEDAS- ///////////////////////////////////////////////////////////////////////////////////////
function dibujarMonedas(){
    let m = document.querySelector(".monedas");
	m.innerHTML = "";
    for(let k = 0;k < monedas;k++){
	m.insertAdjacentHTML("beforeend",`<img src="img/1.jpg">`);
}
}
////////////////////////////////////////////////////////////////- FALLAS- ///////////////////////////////////////////////////////////////////////////////////////
function dibujarFallas(){
    let m = document.querySelector(".fallas");
	m.innerHTML = "";
    for(let k = 0;k < fallas;k++){
	m.insertAdjacentHTML("beforeend",`<img src="img/1.jpg">`);
}
}
/////////////////////////////////nuevas de imagen

///////////////////////////////////////////////////////////////////- QUE QUEDE SUMA Y ESCONDER LAS OTRAS OPERACIONES- ///////////////////////////////////////////////////////////////////////////////////







//MULTIPLICACIONES
function comprobarMultiplicacion(){
     let c = Number(document.querySelector(".mult3").value);
    if (c == multiplicacionCorrecta){
        document.querySelector('.resultado').innerHTML=(`Resultado <span>${c}</span> es Correcto ✔🏆`) ;
        document.querySelector('.resultado').style.color = "rgb(43, 246, 25)";
	document.querySelector('.monedas').insertAdjacentHTML("beforeend",`<img class="kiko" src="img/1.png">`);
	monedas++;
	sonido1.play();
    document.querySelector('.resultadoTotal').diabled;  
    }else{
        document.querySelector('.resultado').innerHTML=(`Incorrecto ❌😥, El Resultado correcto de ${a} ✖ ${b} es:<span> ${multiplicacionCorrecta}</span>😎😑.`);
        document.querySelector('.resultado').style.color = "red";
	document.querySelector('.fallas').insertAdjacentHTML("beforeend",`<img class="kiko" src="img/2.jpg">`);
	fallas++;
	sonidoError.play();
    document.querySelector('.resultadoTotal').diabled;  
    }
    preguntarMultiplicacion();
    }

function preguntarMultiplicacion(){
    a = Math.floor(Math.random()*10);
    b = Math.floor(Math.random()*10);
    multiplicacionCorrecta = a * b;
    document.querySelector(".mult1").value = a;
    document.querySelector(".mult2").value = b;
    document.querySelector(".mult3").value = "";
    document.querySelector(".mult3").focus();
}

