import { getPoints } from "../../data/state-manager.js";
import { ResultBlock } from "./ResultBlock/ResultBlock.js";

export function ResultPanelComponent() {
    const element = document.createElement('div')
    element.classList.add('result-container')

    const points = getPoints()

    element.append(
        ResultBlock('Cath:', points.catch),
        ResultBlock('Miss:', points.miss)
    )

    return element;
}