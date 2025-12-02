import { ToggleSound } from "./ToggleSound/ToggleSound.js"
export function SwitchButton(){
    const container = document.createElement('div')
   container.classList.add('switch-button')

    const labelElemnt =document.createElement('label')
    labelElemnt.innerText='Sound on'

    container.append(
        labelElemnt,
        ToggleSound()
    )

    return container
}