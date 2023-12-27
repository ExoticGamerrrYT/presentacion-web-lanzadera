const subtitle1 = document.querySelector('#subtitle-1')
const subtitle1_text = 'Lanzadera de cohetes espaciales móvil.'
if (subtitle1) {
    subtitle1.textContent = subtitle1_text
}

const details1 = document.querySelector('#details-1')
const details1_text = 'Trabajo de tecnología de 1º de bachillerato, consiste en modelar una lanzadera de cohetes espaciales en 3D.'
if (details1) {
    details1.textContent = details1_text
}
/*
const history1 = document.querySelector('#history-1')
const pathToHistory1 = '../assets/history1.txt'
const history1_text = fs.readFileSync(pathToHistory1, 'utf-8')
if (history1){
    history1.textContent = history1_text
}
*/

const pathToHistory1 = '../assets/history1.txt'

fetch(pathToHistory1)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error al cargar el archivo: ${response.statusText}`);
    }
    return response.text();
  })
  .then(history1_text => {
    const history1_text_withBr = history1_text.replace(/\n/g, '<br>');
    const history1 = document.querySelector('#history-1')
    if (history1) {
        history1.innerHTML = history1_text_withBr;
    }
  })
  .catch(error => console.error('Error:', error));