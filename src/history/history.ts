const pathToHistory1 = '/assets/history1.txt'

fetch(pathToHistory1)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo: ${response.statusText}`)
        }
        return response.text()
    })
    .then((history1_text) => {
        const history1_text_withBr = history1_text.replace(/\n/g, '<br>')
        const history1 = document.querySelector('#history-1')
        if (history1) {
            history1.innerHTML = history1_text_withBr
        }
    })
    .catch((error) => console.error('Error:', error))
