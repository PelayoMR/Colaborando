window.onload = function() {
    //script para la pagina principal
    const manual = document.querySelector(".man");   
    manual.addEventListener("click",accion)

    function accion(e){

        if(e.target.innerText=="Manual"){
            manual.nextElementSibling.style.height="300px";
            e.target.innerText="Cerrar";
            setTimeout(function(){ manual.nextElementSibling.firstElementChild.style.display="block" }, 500);
        }else if(e.target.innerText=="Cerrar"){
            manual.nextElementSibling.style.height="0px";
            e.target.innerText="Manual";
            manual.nextElementSibling.firstElementChild.style.display="none";
        }

    }

}