const inpElement = document.getElementById('title')
const addBtn = document.getElementById('add')
const listElement = document.getElementById('list')

const notes = [
    {title: 'Хлеб',
    completed: true},
    {title: 'Батон',
    completed: false}
]

function render() {
    listElement.innerHTML = ''
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
            <span id="check" class='${note.completed ? 'done' : 'not-done-check'}' data-index='${index}'><i class="fa-solid fa-check"></i></span>
            <span id="delete"><i class="fa-solid fa-xmark"></i></span>
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