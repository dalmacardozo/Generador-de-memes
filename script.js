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
    body.classList.toggle('modo-claro');
    header.classList.toggle('modo-claro-header');
    aside[0].classList.toggle('modo-claro-aside');
    aside[1].classList.toggle('modo-claro-aside');
    botonImg.classList.toggle('botones-claro');
    botonText.classList.toggle('botones-claro');
    botonModo.classList.toggle('botones-claro');
    if (body.classList.contains('modo-claro')) {
        botonModo.innerText = ('🌇 Modo claro') }
        else {
            botonModo.innerText = ('🌆 Modo oscuro')
        }
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


//TIPO DE FUENTE

const select = document.getElementById('fuentes')


const cambioDeFuente = () => {
contenedorText[0].style.fontFamily = `${select.value}`
contenedorText[1].style.fontFamily = `${select.value}`

}

select.addEventListener('change', () => cambioDeFuente())

//INPUT CHECKED

const checkedTop = document.getElementById('superior');
const checkedBottom = document.getElementById('inferior');

const checked = () => {
    if (checkedTop.checked) {
        contenedorText[0].classList.add('oculto')
     } else {
         contenedorText[0].classList.remove('oculto')
     }
    
}

const checkBottom = () => {
    if (checkedBottom.checked) {
       contenedorText[1].classList.add('oculto')
    } else {
        contenedorText[1].classList.remove('oculto')
    }
    
}

checkedTop.addEventListener('change', () => checked())
checkedBottom.addEventListener('change', () => checkBottom())

//BOTONES DE ALINEACIÓN DE FUENTE

const btnLeft = document.getElementById('btn-left')
const btnCenter = document.getElementById('btn-center')
const btnRight = document.getElementById('btn-right')

const posicionI = () => {
    contenedorText[0].style.textAlign = 'left';
    contenedorText[1].style.textAlign = 'left'
}

const posicionC = () => {
    contenedorText[0].style.textAlign = 'center'
    contenedorText[1].style.textAlign = 'center'
}

const posicionR = () => {
    contenedorText[0].style.textAlign = 'right'
    contenedorText[1].style.textAlign = 'right'
}

btnLeft.addEventListener('click', () => posicionI())
btnCenter.addEventListener('click', () => posicionC())
btnRight.addEventListener('click', () => posicionR())


//BOTON DE DESCARGA

const meme = document.getElementById("meme-container")
const downloadButtom = document.getElementById("descarga-btn")


const downloadMeme = () => {
    domtoimage.toBlob(meme).then(function (blob) {
      window.saveAs(blob, "mi-meme.png");
    });
  };

downloadButtom.addEventListener("click", () => downloadMeme());





