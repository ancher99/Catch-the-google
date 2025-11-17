import { EVENTS } from "../../../core/constans.js";
import { getGooglePoints, getPlayerPoints, subcribe, unsubcribe } from "../../../core/state-manager.js";


export function ResultPanelComponent(){
    const element = document.createElement('div');

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
    
    element.append(`Player1: ${player1Points}, Player2: ${player2Points}, Google: ${googlePoints} `)   
    }