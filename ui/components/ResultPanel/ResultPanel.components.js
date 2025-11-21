import { EVENTS } from "../../../core/constans.js";
import { getGooglePoints, getPlayerPoints, subcribe, unsubcribe } from "../../../core/state-manager.js";
import { ResultBlock } from "./ResultBlock/ResultBlock.js";


export function ResultPanelComponent(){
    const element = document.createElement('div');
    element.classList.add('result-container')
    const observer = (e) =>{
        if(e.name === EVENTS.SCORES_CHANGED){
    render(element)
        }

    }
    subcribe(observer)

    render(element)

    return {element, cleanup:()=>{unsubcribe(observer)}};
}


async function render(element) {
    element.innerHTML='';

     const googlePoints = await getGooglePoints();
     const player1Points = await getPlayerPoints(1);
     const player2Points = await getPlayerPoints(2);
     
    element.append(
        ResultBlock('Player 1', player1Points, 1 ),
        ResultBlock('Player 2', player2Points, 2 ),
        ResultBlock('Google', googlePoints,0 ),
    )  
    }

    