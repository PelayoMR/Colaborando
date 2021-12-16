window.onload = function() {
    
    const retro = document.querySelector(".retroceder");
    const ima = document.querySelector(".foto");
    const avan = document.querySelector(".avanzar");

    var IMAGENES = [
        'fotos/carousel/foto1.jpg',
        'fotos/carousel/foto2.jpg',
        'fotos/carousel/foto3.jpg',
        'fotos/carousel/foto4.jpg'
    ];

    var posicionActual=0;
    
    avan.addEventListener('click', pasarFoto);
    retro.addEventListener('click', retrocederFoto);

    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        console.log(IMAGENES[posicionActual]);
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        console.log(IMAGENES[posicionActual]);
        renderizarImagen();
    }


function renderizarImagen () {
    ima.src = `${IMAGENES[posicionActual]}`;
}
}