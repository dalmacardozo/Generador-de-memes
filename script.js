//MODO CLARO

const body = document.getElementById('modo-oscuro');
const header = document.getElementById('header-modo-claro');
const aside = document.getElementsByClassName('columna');
//const fondoInput = document.getElementsByTagName('input');
const botonImg = document.getElementById('boton-img');
const botonText = document.getElementById('boton-text');
const asideImg = document.getElementById('aside-img');
const asideText = document.getElementById('aside-text');
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

//Displey Hidden en columnas asaid

const ocultoAsideImg = () => {
    asideText.classList.add('oculto');
    asideImg.classList.remove('oculto');

}

const ocultoAsideText = () => {
    asideText.classList.remove('oculto');
    asideImg.classList.add('oculto');
}

botonImg.addEventListener('click', ()=> ocultoAsideImg())
botonText.addEventListener('click', ()=> ocultoAsideText())


//Input color en columna IMG

const contenedorMeme = document.getElementById('meme-fondo');
const inputColor = document.getElementsById('opciones-de-color')


const cambioDeColor = (color) => {
    contenedorMeme.style.backgroundColor = (color)

}

inputColor.addEventListener('click', (evento) => cambioDeColor(evento))
