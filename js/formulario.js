window.onload = function() {

    var miForm = document.forms[0];

    const inputs = document.querySelectorAll("input");
    const coment = document.querySelector("textarea");
    const envio = document.querySelector(".envio");
    const resultado = document.querySelector("#resul");
    const enviar=document.querySelector(".enviar")
    




    //numero aleatorio de para enviar el formulario

    var op1 = Math.floor(Math.random() * 11);
    var op2 = Math.floor(Math.random() * 11);

    miForm.op.value = ` ${op1} + ${op2} =`

    for (let input of inputs) {

        input.addEventListener("focus", obtenFoco);
        input.addEventListener("blur", pierdeFoco);

    }

    coment.addEventListener("focus", obtenFoco);
    coment.addEventListener("blur", pierdeFoco);
    resultado.addEventListener("input", correcto)
    enviar.addEventListener("click", accion);

    function obtenFoco(e) {

        this.nextElementSibling.classList.add("foco");

    }

    function pierdeFoco() {
        if (!this.value) {
            this.nextElementSibling.classList.remove("foco");
        }
    }


    function correcto() {
        let numero = op1 + op2;
        if (miForm.resultado.value != numero) {

            miForm.resultado.style.backgroundColor = "rgb(248, 62, 62)";
            enviar.disabled=true;
            return

        } else {

            miForm.resultado.style.backgroundColor = "rgb(14, 150, 14)";
            enviar.disabled=false;
        }


    }

    function accion() {
        let error = "no";
        let nombre = miForm.nombre.value;
        let apellido = miForm.apellido.value;
        let email = miForm.email.value;
        let dni = miForm.dni.value;


        if (!(/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/.test(nombre))) {
            miForm.nombre.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("fa-check");
            miForm.nombre.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("fa-times");
            miForm.nombre.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "red";
            miForm.nombre.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "block";
            error = "si";

        } else {
            miForm.nombre.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("fa-times");
            miForm.nombre.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("fa-check");
            miForm.nombre.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "green";
            miForm.nombre.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";

        }
        if (!(/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/.test(apellido))) {
            miForm.apellido.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("fa-check");
            miForm.apellido.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("fa-times");
            miForm.apellido.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "red";
            miForm.apellido.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "block";
            error = "si";
        } else {
            miForm.apellido.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("fa-times");
            miForm.apellido.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("fa-check");
            miForm.apellido.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "green";
            miForm.apellido.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";

        }
        if (!(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email))) {
            miForm.email.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("fa-check");
            miForm.email.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("fa-times");
            miForm.email.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "red";
            miForm.email.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "block";
            error = "si";
        } else {
            miForm.email.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("fa-times");
            miForm.email.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("fa-check");
            miForm.email.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "green";
            miForm.email.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";
        }
        if (!(/[0-9]{7,8}[A-Z]/.test(dni))) {
            miForm.dni.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("fa-check");
            miForm.dni.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("fa-times");
            miForm.dni.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "red";
            miForm.dni.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "block";
            error = "si";
        } else {
            miForm.dni.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("fa-times");
            miForm.dni.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("fa-check");
            miForm.dni.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "green";
            miForm.dni.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";

        }

        if (error == "si") {
            envio.lastElementChild.innerText = "No se ha enviado el formulario por que tiene errores";
            envio.lastElementChild.style.display = "block"
            envio.lastElementChild.style.color = "red";
        } else {
            envio.lastElementChild.innerText = "Se ha enviado correctamente el formulario";
            envio.lastElementChild.style.display = "block"
            envio.lastElementChild.style.color = "green";

        }


    }





}