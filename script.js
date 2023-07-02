//MODO CLARO

const body = document.getElementById('modo-oscuro');
const header = document.getElementById('header-modo-claro');
const aside = document.getElementById('aside-modo-claro');
//const fondoInput = document.getElementsByTagName('input');
const botonImg = document.getElementById('boton-img');
const botonText = document.getElementById('boton-text');
const botonModo = document.getElementById('boton-modo');
const botonModoClaro = document.getElementById('boton-modo')

const modoClaro = () => {
    body.classList.add('modo-claro');
    header.classList.add('modo-claro-header');
    aside.classList.add('modo-claro-aside');
    botonImg.classList.add('botones-claro');
    botonText.classList.add('botones-claro')
    botonModo.classList.add('botones-claro')
    //fondoInput.add('contenedor-input-claro')
}

botonModoClaro.addEventListener('click', () => modoClaro())

//Cambio de color en columna IMG

const contenedorMeme = document.getElementById('meme-fondo');
const inputColor = document.getElementsById('opciones-de-color')


const cambioDeColor = (color) => {
    contenedorMeme.style.backgroundColor = (color)

}

inputColor.addEventListener('click', (evento) => cambioDeColor(evento))




