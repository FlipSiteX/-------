const inpElement = document.getElementById('title')
const addBtn = document.getElementById('add')
const listElement = document.getElementById('list')

const notes = []

function render() {
    listElement.innerHTML = ''
    if (notes.length === 0) {
        listElement.innerHTML = '<li>Список пуст</li>'
    }
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }
}

render()

function getNoteTemplate (note, index) {
    return    `
    <li>
         <span class='${note.completed ? 'line-through' : ''}'>${note.title}</span>
        <span>
            <i class="fa-solid fa-check ${note.completed ? 'done' : 'not-done'}" id="check" data-index='${index}' data-type='switch'></i>
            <i class="fa-solid fa-xmark" id="delete" data-index='${index}' data-type='remove'></i>
        </span>
     </li>
     `
}

addBtn.onclick = function () {
    if (inpElement.value === '') {
        return 
    }
    const newNote = {
        title: inpElement.value,
        completed: false
    }
    notes.push(newNote)
    render()
    inpElement.value = ''
}

listElement.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type
        if (type === 'switch') {
            notes[index].completed = !notes[index].completed
        }
        else {
            notes.splice(index, 1)
        }
        render()
    }
}
