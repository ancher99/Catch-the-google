import { getGooglePoints, getPlayerPoints } from "../../../../../core/state-manager.js"
import { ResultBlock } from "../../../ResultPanel/ResultBlock/ResultBlock.js"

export function ModalResult(){
    const element = document.createElement('div')
    element.classList.add('modal-result')

    render(element)

    return element
}


async function render(element) {

     const googlePoints = await getGooglePoints();
     const player1Points = await getPlayerPoints(1);
     const player2Points = await getPlayerPoints(2);
     
    element.append(
        ResultBlock('Player 1', player1Points),
        ResultBlock('Player 2', player2Points),
        ResultBlock('Google', googlePoints),
    )  
    }