var subtitle1 = document.querySelector('#subtitle-1')
var subtitle1_text = 'Lanzadera de cohetes espaciales móvil.'
if (subtitle1) {
    subtitle1.textContent = subtitle1_text
}
var details1 = document.querySelector('#details-1')
var details1_text = 'Trabajo de tecnología de 1º de bachillerato, consiste en modelar una lanzadera de cohetes espaciales en 3D.'
if (details1) {
    details1.textContent = details1_text
}
var pathToHistory1 = '../assets/history1.txt'
fetch(pathToHistory1)
    .then(function (response) {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo: '.concat(response.statusText))
        }
        return response.text()
    })
    .then(function (history1_text) {
        var history1_text_withBr = history1_text.replace(/\n/g, '<br>')
        var history1 = document.querySelector('#history-1')
        if (history1) {
            history1.innerHTML = history1_text_withBr
        }
    })
    .catch(function (error) {
        return console.error('Error:', error)
    })

// Image Slider
let slideIndex = 1
showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n))
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n))
}

function showSlides(n) {
    let i
    let slides = document.getElementsByClassName('mySlides')
    let dots = document.getElementsByClassName('dot')
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
    }
    slides[slideIndex - 1].style.display = 'block'
    dots[slideIndex - 1].className += ' active'
}
