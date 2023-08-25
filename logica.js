const carousel = document.getElementById("cambiar")
const imgSiguiente = document.getElementById("siguiente")
const imgAnterior = document.getElementById("anterior")

let contador = 0;

carousel.addEventListener("click", cambiar)

function cambiar(){
    if(document.getElementById("boton").innerHTML != "Visualizar Galería"){
        document.getElementById("galeria").className = "ocultar"
        document.getElementById("carousel").className = "carousel"
        document.getElementById("boton").innerHTML = "Visualizar Galería"
    } else{
        document.getElementById("galeria").className = "galeria"
        document.getElementById("carousel").className = "ocultar"
        document.getElementById("boton").innerHTML = "Visualizar Galería Deslizante"
    }

}

imgSiguiente.addEventListener("click", seguir)
imgAnterior.addEventListener("click", volver)

function seguir(){
    contador += 1;
    if(contador > 5){
        contador = 0;
    }
    comprobarSiguiente()
}

function volver(){
    contador -= 1;
    if(contador < 0){
        contador = 5;
    }
    comprobarAnterior()
}

function comprobarSiguiente(){
    switch(contador){
        case(0):
        document.getElementById("img1").className = ""
        document.getElementById("img6").className = "ocultar"
        break
        case(1):
        document.getElementById("img2").className = ""
        document.getElementById("img1").className = "ocultar"
        break
        case(2):
        document.getElementById("img3").className = ""
        document.getElementById("img2").className = "ocultar"
        break
        case(3):
        document.getElementById("img4").className = ""
        document.getElementById("img3").className = "ocultar"
        break
        case(4):
        document.getElementById("img5").className = ""
        document.getElementById("img4").className = "ocultar"
        break
        case(5):
        document.getElementById("img6").className = ""
        document.getElementById("img5").className = "ocultar"
        break
    }
}

function comprobarAnterior(){
    switch(contador){
        case(0):
        document.getElementById("img1").className = ""
        document.getElementById("img2").className = "ocultar"
        break
        case(1):
        document.getElementById("img2").className = ""
        document.getElementById("img3").className = "ocultar"
        break
        case(2):
        document.getElementById("img3").className = ""
        document.getElementById("img4").className = "ocultar"
        break
        case(3):
        document.getElementById("img4").className = ""
        document.getElementById("img5").className = "ocultar"
        break
        case(4):
        document.getElementById("img5").className = ""
        document.getElementById("img6").className = "ocultar"
        break
        case(5):
        document.getElementById("img6").className = ""
        document.getElementById("img1").className = "ocultar"
        break
    }
}