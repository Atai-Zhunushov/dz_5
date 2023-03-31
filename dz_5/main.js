const input = document.getElementById('input')
const createButton = document.querySelector('#create_button')
const  TodoList =  document.querySelector('#todo_list')

const createTodo = () => {
    if (input.value.trim() === '') {
        return false
    } else {

    }
    const div = document.createElement('div')
    const text = document.createElement('h3')
    const button = document.createElement('button')
    const edit = document.createElement('button')

    div.setAttribute('class', 'block_text')
    text.innerHTML = input.value
    input.value = ''


    button.textContent = 'Delete'
    button.setAttribute('class' , 'delete_buttons')
    edit.textContent = 'edit'
    edit.setAttribute('class' , 'edit_buttons')


    div.append(button)
    div.append(edit)

    button.addEventListener('click' , () => {
        div.remove()
    })
    edit.addEventListener('click' ,  () => {
        const info = prompt('').trim()
        div.textContent = info
    })

    div.append(text)
    TodoList.prepend(div)
}

createButton.addEventListener('click', createTodo)

const deleteButton = document.createElement('button')
const editButton = document.createElement('button')




