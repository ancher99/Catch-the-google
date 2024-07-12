import { getPoints } from "../../../../data/state-manager.js"
import { ResultBlock } from "../../../ResultPanel/ResultBlock/ResultBlock.js"

export function ModalResult(){
    const element = document.createElement('div')
    element.classList.add('modal-result')

    const points = getPoints()

    element.append(
        ResultBlock('Catch:', points.catch),
        ResultBlock('Miss:', points.miss),
    )

    return element
}