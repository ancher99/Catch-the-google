import { playAgain } from "../../../core/state-manager.js";
import { ModalDecoration } from "./ModalDecoration/ModalDecoration.js";
import { ModalElement } from "./ModalElement/ModalElement.js";

export function WinComponent(){
    const element = document.createElement('div');
    element.classList.add('modal')
    render(element);

    return {element};
}


async function render(element) {
    
    element.append(
      ModalDecoration(),
      ModalElement())
}