import {  startGame } from "../../../data/state-manager.js"

export function ButtonStart(){
    const element = document.createElement('button')
    element.classList.add('button')
    element.classList.add('main-button')
    element.innerText='START GAME'
    element.addEventListener('click', startGame)

    return element
}