import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Grab all buttons with class 'check'
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    button.addEventListener("click", handleClick)
})

//When the 'delete' button is clicked it opens the modal
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"

    const form = document.querySelector ('.modal form')
    form.setAttribute("action", `/room/:room/:question/:action`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} essa pergunta ?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open()

}
