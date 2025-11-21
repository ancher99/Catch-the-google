import { playAgain } from "../../../../core/state-manager.js"
import { ModalResult } from "./ModalResult/ModalResult.js"

export function ModalElement(){
    const element = document.createElement('div')
    element.classList.add('modal-elements')


    render(element)
    

    return element
}

async function render(element) {
    const titleElement = document.createElement('div')
    titleElement.classList.add('title-modal')
    titleElement.innerText = 'You Win!'

    const textElement = document.createElement('div')
    textElement.classList.add('text-modal')
    textElement.innerText = "Congratulations"

    const buttonElement = document.createElement('button')
    buttonElement.classList.add('button__b')
    buttonElement.append('Play again')
    buttonElement.addEventListener('click', () => {
      playAgain()
    })

    element.append(
        titleElement,
        textElement,
        ModalResult(),
        buttonElement
    )
}