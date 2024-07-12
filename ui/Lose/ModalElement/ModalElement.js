import { playAgain } from "../../../data/state-manager.js"
import { ModalResult } from "./ModalResult/ModalResult.js"

export function ModalElement(){
    const element = document.createElement('div')
    element.classList.add('modal-elements')

    const titleElement = document.createElement('div')
    titleElement.classList.add('title-modal')
    titleElement.innerText = 'You Lose!'

    const textElement = document.createElement('div')
    textElement.classList.add('text-modal')
    textElement.innerText = "You'll be lucky next time"

    const buttonElement = document.createElement('button')
    buttonElement.classList.add('button')
    buttonElement.append('Play again')

    buttonElement.addEventListener('click', () =>{
        playAgain()
    })
    
    element.append(
        titleElement,
        textElement,
        ModalResult(),
        buttonElement

    )



    return element
}


 // const points = getPoints()

    // const titleElement = document.createElement('h1')
    // titleElement.append('you lose');
    
    // element.append(titleElement);

    // element.append(`catch: ${points.catch}; miss: ${points.miss}`)

    // const playAgainButtonElement = document.createElement('button')
    // playAgainButtonElement.append('Play again');
    // playAgainButtonElement.addEventListener('click', () => {
    //     playAgain();
    // });

    // element.append(playAgainButtonElement)