//! Comando para compilar: tsc src\app.ts
var subtitle1 = document.querySelector('#subtitle-1');
var subtitle1_text = 'Lanzadera de cohetes espaciales móvil.';
// Cambiamos el contenido del subtítulo
if (subtitle1) {
    subtitle1.textContent = subtitle1_text;
}
var details1 = document.querySelector('#details-1');
var details1_text = 'Trabajo de tecnología de 1º de bachillerato, consiste en modelar una lanzadera de cohetes espaciales en 3D.';
if (details1) {
    details1.textContent = details1_text;
}
/* CHECKBOX
function handleCheckboxChange() {
    const checkbox = document.getElementById("myCheckbox") as HTMLInputElement;
    const statusElement = document.getElementById("status");

    if (checkbox && statusElement) {
        const status = checkbox.checked ? "Seleccionado" : "No seleccionado";
        statusElement.textContent = "Estado: " + status;
    }
}
*/
// TODO: PARALLAX
/*
document.addEventListener('DOMContentLoaded', () => {
    // Crea las formas
    createShapes();
});

document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const parallaxContainer = document.querySelector('.parallax-container') as HTMLElement;

    parallaxContainer.style.backgroundPositionY = `${scrollPosition * 0.7}px`;

    // Mueve los cuadrados hacia arriba más lentamente
    const squares = document.querySelectorAll('.square') as NodeListOf<HTMLElement>;
    squares.forEach((square) => {
        const speed = 0.3; // Ajusta la velocidad de movimiento
        square.style.transform = `translateY(-${scrollPosition * speed}px) rotate(${Math.random() * 360}deg)`;
    });
});

function createShapes() {
    const numSquares = 20; // Ajusta la cantidad de cuadrados

    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        document.body.appendChild(square);
    }
}
*/
