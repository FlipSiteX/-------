const inpElement = document.getElementById('title')
const addBtn = document.getElementById('add')
const listElement = document.getElementById('list')

const notes = ['Хлеб', 'Батон']

function render() {

    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
    }
}

render()

function getNoteTemplate (title) {
    return    `
    <li>
         <span>${title}</span>
        <span>
            <span id="check"><i class="fa-solid fa-check"></i></span>
            <span id="delete"><i class="fa-solid fa-xmark"></i></span>
        </span>
     </li>
     `
}

addBtn.onclick = function () {
    if (inpElement.value === '') {
        return 
    }
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inpElement.value))
    inpElement.value = ''
}