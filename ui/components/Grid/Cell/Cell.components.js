import { EVENTS } from "../../../../core/constans.js"
import { getGooglePosition, getPlayersPosition, subcribe, unsubcribe } from "../../../../core/state-manager.js"
import { GoogleComponent } from "../../Common/Google/Google.component.js"
import { PlayerComponent } from "../../Common/Player/Player.component.js"

export function CellComponent (x,y){
    console.log('cell component')
    const element=document.createElement('td')

    let observer = (e) =>{
        if(e.name !== EVENTS.GOOGLE_JUMPED) return

        if(e.payload.oldPosition.x === x && e.payload.oldPosition.y ===y){
            render(element,x,y)
        }
        if (e.payload.newPosition.x === x && e.payload.newPosition.y ===y)
        render(element, x,y)
        
        
    };
    subcribe(observer)

    render(element, x, y)

    return {element, cleanup: () => { 
        console.log(`cleanup${x};${y}`)
        unsubcribe(observer)}}
}


async function render(element, x, y) {
    element.innerHTML=''
    const googlePosition = await getGooglePosition()
    const player1Position = await getPlayersPosition(1)
    const player2Position = await getPlayersPosition(2)

    if(googlePosition.x === x && googlePosition.y ===y){
        element.append(GoogleComponent().element)
    }
    if(player1Position.x === x && player1Position.y ===y){
        element.append(PlayerComponent(1).element)
    }
    if(player2Position.x === x && player2Position.y ===y){
        element.append(PlayerComponent(2).element)
    }

}