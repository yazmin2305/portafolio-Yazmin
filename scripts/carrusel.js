const images = document.querySelector(".images")
const imagesCollection = document.querySelectorAll(".image")
const prevBtn = document.querySelector(".anterior")
const nextBtn = document.querySelector(".siguiente")

prevBtn.addEventListener("click", prevSlide)
nextBtn.addEventListener("click", nextSlide)

//variables
let index = 0
//intervalos
let interval = setInterval(startInterval, 2000)

function startInterval() {
    index++
    moveCarrusel()
}

function resetInterval() {
    clearInterval(interval)
    // inicializar de nuevo el intervalo para que no se quede 
    //estatico al momento de presionar el boton
    interval = setInterval(startInterval, 3000)
}

function moveCarrusel() {
    if (index > imagesCollection.length - 1) {
        index = 0
    } else if (index < 0) {
        index = imagesCollection.length - 1
    }
    images.style.transform = `translateX(-${index * 800}px)`
}



function prevSlide() {
    index--
    resetInterval()
    moveCarrusel()
}
function nextSlide() {
    index++
    resetInterval()
    moveCarrusel()
}
