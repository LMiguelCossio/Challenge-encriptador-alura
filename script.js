var botonEncriptar=document.querySelector(".boton-encriptar");
var botonDesencriptar=document.querySelector(".boton-desencriptar");
var botonCopiar=document.querySelector(".boton-copiar");
var mensaje=document.querySelector(".mensaje");
var resultado=document.querySelector(".texto-resultado");
var textoIngresado=document.querySelector(".texto-ingresado");
var contenedorImagen=document.querySelector(".contenedor-imagen");
var salida2=document.querySelector(".salida");

botonEncriptar.addEventListener("click",encriptar);
botonDesencriptar.addEventListener("click",desencriptar);

var resultadoAux;

function ocultar(){
    contenedorImagen.classList.add("ocultar")
    mensaje.classList.add("ocultar");
    botonCopiar.classList.add("boton-copiar-2");
    salida2.classList.add("salida2");
}
function encriptarTexto(texto){
    resultadoAux="";
    for (let i=0;i< texto.length;i++){
        if (texto[i] == "a"){
            resultadoAux+="ai";
        }
        else if(texto[i] =="e"){
            resultadoAux+="enter";
        }
        else if(texto[i] == "i"){
            resultadoAux+="imes";
        }
        else if(texto[i] =="o"){
            resultadoAux+="ober";
        }
        else if(texto[i]=="u"){
            resultadoAux+="ufat";
        }
        else{
            resultadoAux+=texto[i];
        }
    }
    return resultadoAux;
}
function desencriptarTexto(texto){
    resultadoAux="";
    for (let i=0;i< texto.length;i++){
        if (texto[i] == "a"){
            resultadoAux+="a";
            i+=1;
        }
        else if(texto[i]=="e"){
            resultadoAux+="e";
            i+=4;
        }
        else if(texto[i]=="i"){
            resultadoAux+="i";
            i+=3;
        }
        else if(texto[i]=="o"){
            resultadoAux+="o";
            i+=3;
        }
        else if(texto[i]=="u"){
            resultadoAux+="u";
            i+=3;
        }
        else{
            resultadoAux+=texto[i];
        }
    }
    return resultadoAux;
}

function obtenerTexto(){
    texto=textoIngresado.value;
    return texto;
}
let texto;
function encriptar(){
    texto=obtenerTexto();
    if (texto!=""){
        ocultar();
        resultado.textContent=encriptarTexto(texto);}
}
function desencriptar(){
    texto=obtenerTexto();
    if (texto!=""){
        ocultar();
        resultado.textContent=desencriptarTexto(texto);}
}
const btnCopiar = document. querySelector(".boton-copiar-2");
btnCopiar-addEventListener("click", copiar = () => {
var contenido = document. querySelector(".texto-resultado").textContent;
navigator.clipboard.writeText (contenido);
})
