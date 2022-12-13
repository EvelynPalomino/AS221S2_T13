/* Carrusel - Docentes */
(function(){
    
  const sliders = [...document.querySelectorAll('.info-docentes')];
  const buttonNext = document.querySelector('#siguiente');
  const buttonBefore = document.querySelector('#antes');
  let value;   

  buttonNext.addEventListener('click', ()=>{
      changePosition(1);
  });

  buttonBefore.addEventListener('click', ()=>{
      changePosition(-1);
  });

  const changePosition = (add)=>{
      const currentTestimony = document.querySelector('.info-docentes--show').dataset.id;
      value = Number(currentTestimony);
      value+= add;


      sliders[Number(currentTestimony)-1].classList.remove('info-docentes--show');
      if(value === sliders.length+1 || value === 0){
          value = value === 0 ? sliders.length  : 1;
      }

      sliders[value-1].classList.add('info-docentes--show');

  }

})();

/*Boton*/
let readMore_btn = document.getElementById('leerMas_btn');
let hideText = document.getElementById('ocultarTexto');

readMore_btn.addEventListener('click', toggleText);

function toggleText() {
  hideText.classList.toggle('agregarTexto');

  if(hideText.classList.contains('agregarTexto')) {
    readMore_btn.innerHTML = 'Ver menos'
  }
  else {
    readMore_btn.innerHTML = 'Ver más'
  }
}

/*Carrusel Actividades*/ 
function App() {}

    window.onload = function(event) {
        var app = new App();
        window.app = app;
    }

    App.prototype.processingButton = function(event) {

        const btn = event.currentTarget;
        const carruselList = event.currentTarget.parentNode;
        const track = event.currentTarget.parentNode.querySelector('#track');
        const carrusel = track.querySelectorAll('.carrusel');
    
        const carruselWidth = carrusel[0].offsetWidth;

        const trackWidth = track.offsetWidth;
        const listWidth = carruselList.offsetWidth;
    
        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) *-1);
        btn.dataset.button == "button-prev" ? prevAction(leftPosition,carruselWidth, track) : nextAction(leftPosition,trackWidth, listWidth, carruselWidth, track);
        
    }

    let prevAction = (leftPosition, carruselWidth, track) => {
        if (leftPosition > 0) {

            track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
        }

    }

    let nextAction = (leftPosition, trackWidth, listWidth, carruselWidth, track) => {
        
        if (leftPosition < (trackWidth  - listWidth)) {
            track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
        }

    }

/*Acordeon - Admisión*/
let cabAcordeon = document.getElementsByClassName("cabAcordeon");
let contenido = document.getElementsByClassName("contenido");
let circulo = document.getElementsByClassName("circulo");


for (let i = 0; i < cabAcordeon.length; i++) {
    cabAcordeon[i].addEventListener("click", function () {
        contenido[i].classList.toggle("animacionContenido");
        let alturaContenido = contenido[i].clientHeight;
        if (alturaContenido > 0) {//ff2f2fcb
            circulo[i].style.backgroundColor = "#00CCFF";
        }else {
            circulo[i].style.backgroundColor = "#00CC33"; 
        }
    });
}

