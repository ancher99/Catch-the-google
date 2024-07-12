import { ModalDecoration } from "./ModalDecoration/ModalDecoration.js";
import { ModalElement } from "./ModalElement/ModalElement.js";

export function LoseComponent() {
    const element = document.createElement('div')
    element.classList.add('modal')


    element.append(
        ModalDecoration(),
        ModalElement()
    )

   

    return element;
}