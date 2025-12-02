import { ModalDecoration } from "../Win/ModalDecoration/ModalDecoration.js";
import { ModalElement } from "./ModalElement/ModalElement.js";

export function WinComponent() {
    const element = document.createElement('div')
    element.classList.add('modal')


    element.append(
        ModalDecoration(),
        ModalElement()
    )

    return element;
}