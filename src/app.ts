// Comando para compilar: tsc src\app.ts
const subtitle1 = document.querySelector("#subtitle-1")
const subtitle1_text = 'Lanzadera de cohetes espaciales móvil.'

// Cambiamos el contenido del subtítulo
if (subtitle1){
    subtitle1.textContent = subtitle1_text
}

const details1 = document.querySelector("#details-1")
const details1_text = 'Trabajo de tecnología de 1º de bachillerato, consiste en modelar una lanzadera de cohetes espaciales en 3D.'

if (details1){
    details1.textContent = details1_text
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