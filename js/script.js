// --------Codigos para la Seleccion de Elementos--------//
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const info = document.querySelector(".texto-info");
const respuesta = document.querySelector(".revisar");
const contenido = document.querySelector(".caja-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

//----------Trabajar con el boton Encriptar---------//
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ")
    
    if(texto == ""){
        info.style.background = "#0A3871";
        info.style.color = "#FFFF";
        info.style.fontWeight ="800";
        info.textContent = "El Campo de texto no debe estar vacío";

        setTimeout(()=>{
            info.removeAttribute("style");
        },1500);
    }

    else if(texto!== txt){
        info.style.background = "#0A3871";
        info.style.color = "#FFFF";
        info.style.fontWeight ="800";
        info.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            info.removeAttribute("style");
        },1500); 
    }

    else if(texto !== texto.toLowerCase()){
        info.style.background = "#0A3871";
        info.style.color = "#FFFF";
        info.style.fontWeight ="800";
        info.textContent = "El texto debe ser todo en minúscula";

        setTimeout(()=>{
            info.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");


        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }

    
});

//----------Trabajar con el boton Desencriptar---------//
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ")
    
    if(texto == ""){
        info.style.background = "#0A3871";
        info.style.color = "#FFFF";
        info.style.fontWeight ="800";
        info.textContent = "El Campo de texto no debe estar vacío";

        setTimeout(()=>{
            info.removeAttribute("style");
        },1500);
    }

    else if(texto!== txt){
        info.style.background = "#0A3871";
        info.style.color = "#FFFF";
        info.style.fontWeight ="800";
        info.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            info.removeAttribute("style");
        },1500); 
    }

    else if(texto !== texto.toLowerCase()){
        info.style.background = "#0A3871";
        info.style.color = "#FFFF";
        info.style.fontWeight ="800";
        info.textContent = "El texto debe ser todo en minúscula";

        setTimeout(()=>{
            info.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");


        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }

    
});

//----------Trabajar con el boton Copiar---------//
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
});