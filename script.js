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

botonImg.addEventListener('click', () => ocultoAsideImg())
botonText.addEventListener('click', () => ocultoAsideText())

//URL-IMAGEN

const inputUrl = document.getElementById('input-img')
const imgUrl = document.getElementById('meme-img')


const changeBackground = (e) => {
    imgUrl.style.backgroundImage = `url('${e.target.value}')`
}

inputUrl.addEventListener('input', (e) => changeBackground(e))

//INPUT RANGE

const brillo = document.getElementById('brillo-input')
const opacidad = document.getElementById('opacidad-input')
const contraste = document.getElementById('contraste-input')
const desenfoque = document.getElementById('desenfoque-input')
const grises = document.getElementById('grises-input')
const sepia = document.getElementById('sepia-input')
const hue = document.getElementById('hue-input')
const negativo = document.getElementById('negativo-input')
const saturado = document.getElementById('saturado-input')

const filtros = (e) => {
    imgUrl.style.filter = `brightness(${brillo.value}) opacity(${opacidad.value}) blur(${desenfoque.value}px) contrast(${contraste.value}%) grayscale(${grises.value}%) hue-rotate(${hue.value}deg) sepia(${sepia.value}%) saturate(${saturado.value}%) invert(${negativo.value})`

}

brillo.addEventListener('input', (brillo) => filtros(brillo))
opacidad.addEventListener('input', (opacidad) => filtros(opacidad))
contraste.addEventListener('input', (contraste) => filtros(contraste))
desenfoque.addEventListener('input', (desenfoque) => filtros(desenfoque))
grises.addEventListener('input', (grises) => filtros(grises))
sepia.addEventListener('input', (sepia) => filtros(sepia))
hue.addEventListener('input', (hue) => filtros(hue))
negativo.addEventListener('input', (negativo) => filtros(negativo))
saturado.addEventListener('input', (saturado) => filtros(saturado))


//INPUT COLOR 

const inputColor = document.getElementById('input-color')
const inputColorText = document.getElementById('input-color-texto')
const contenedorText = document.getElementsByClassName('texto-superior-inferior')
const inputColorFondo = document.getElementById('input-color-fondo')


const cambioDeColor = () => {
    imgUrl.style.backgroundColor = inputColor.value
}

const cambioDeColorText = () => {
    contenedorText[0].style.color = inputColorText.value
    contenedorText[1].style.color = inputColorText.value
}

const cambioDeFondo = () => {
    contenedorText[0].style.backgroundColor = inputColorFondo.value
    contenedorText[1].style.backgroundColor = inputColorFondo.value
}


inputColor.addEventListener('input', () => cambioDeColor())
inputColorText.addEventListener('input', () => cambioDeColorText())
inputColorFondo.addEventListener('input', () => cambioDeFondo())


//INPUT - CAMBIO DE TEXTO

const textoSuperiorInput =  document.getElementById('top-text')
const textoInferiorInput = document.getElementById('bottom-text')

const cambioDeTextoSuperior = () =>  {
        contenedorText[0].innerText = `${textoSuperiorInput.value}`

}

const cambioDeTextoInferior = () => {
    contenedorText[1].innerText = `${textoInferiorInput.value}`
}


textoSuperiorInput.addEventListener('input', () => cambioDeTextoSuperior())
textoInferiorInput.addEventListener('input', () => cambioDeTextoInferior())





