//MODO CLARO

const body = document.getElementById('modo-oscuro');
const header = document.getElementById('header-modo-claro');
const aside = document.getElementsByClassName('columna');
const botonImg = document.getElementById('boton-img');
const botonText = document.getElementById('boton-text');
const asideImg = document.getElementById('aside-img');
const asideText = document.getElementById('aside-text');
const botonModo = document.getElementById('boton-modo');
const botonModoClaro = document.getElementById('boton-modo')

const modoClaro = () => {
    body.classList.add('modo-claro');
    header.classList.add('modo-claro-header');
    aside[0].classList.add('modo-claro-aside');
    aside[1].classList.add('modo-claro-aside');
    botonImg.classList.add('botones-claro');
    botonText.classList.add('botones-claro')
    botonModo.classList.add('botones-claro')
}

botonModoClaro.addEventListener('click', () => modoClaro())

//Displey oculto en columnas asaid

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

//URL-IMAGEN

const inputUrl = document.getElementById('input-img')
const imgUrl = document.getElementById('meme-img')

const changeBackground = (e) => {
    imgUrl.style.backgroundImage = `url('${e.target.value}')`
 }

inputUrl.addEventListener('input', (e) => changeBackground(e))

//INPUT RANGE

const brillo = document.getElementById('brillo-input')
console.log(brillo)
const opacidad = document.getElementById('opacidad-input')
const contraste = document.getElementById('contraste-input')
const desenfoque = document.getElementById('desenfoque-input')
const grises = document.getElementById('grises-input')
const sepia = document.getElementById('sepia-input')
const hue = document.getElementById('hue-input')
const negativo = document.getElementById('negativo-input')
const saturado = document.getElementById('saturado-input')

const filtros = (e) => {
    console.log(e.target.value)
    imgUrl.style.filter = `brightness(${brillo.value}) opacity(${opacidad.value}) blur(${desenfoque.value}px) contrast(${contraste.value}%) grayscale(${grises.value}%) hue-rotate(${hue.value}deg) sepia(${sepia.value}%) saturate(${saturado.value}%) invert(${negativo.value})`

}

brillo.addEventListener('input', (e) => filtros(e))
opacidad.addEventListener('input', (e) => filtros(e))
contraste.addEventListener('input', (e) => filtros(e)) 
desenfoque.addEventListener('input', (e) => filtros(e))
grises.addEventListener('input', (e) => filtros(e))
sepia.addEventListener('input', (e) => filtros(e))
hue.addEventListener('input', (e) => filtros(e))
negativo.addEventListener('input', (e) => filtros(e))
saturado.addEventListener('input', (e) => filtros(e))


//INPUT COLOR

//const inputColor = document.getElementsById('opciones-de-color')


//const cambioDeColor = (c)  => {
    //imgUrl.style.backgroundColor = `('${c.target.value}')`}


//inputColor.addEventListener('input', (color) => cambioDeColor(color))