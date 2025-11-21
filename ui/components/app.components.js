import { GAME_STATUSES } from "../../core/constans.js";
import { getGameStatus, subcribe } from "../../core/state-manager.js";
import { AudioComponent } from "./Audio/Audio.component.js";
import { GridComponent } from "./Grid/Grid.components.js";
import { LoseComponent } from "./Lose/Lose.components.js";
import { ResultPanelComponent } from "./ResultPanel/ResultPanel.components.js";
import { SettingsComponent } from "./Settings/Settings.components.js";
import { StartComponent } from "./Start/Start.component.js";
import { WinComponent } from "./Win/Win.component.js";

export function AppComponent(){
    const localState = {prevGameStatus:null, cleanupFunction:[]}
    const element = document.createElement('section');
    element.classList.add('container')

    const audioComponent = AudioComponent()

    subcribe(() =>{
        
        render(element, localState);
    })

    render(element, localState)

    return {element};
}

async function render(element, localState) {

    const gameStatus = await getGameStatus()

    if(localState.prevGameStatus === gameStatus) return;
    localState.prevGameStatus = gameStatus;
    
    localState.cleanupFunction.forEach(cf =>cf())
    localState.cleanupFunction =[]

    element.innerHTML=''
    switch(gameStatus){
        case GAME_STATUSES.SETTINGS:{
            const settingsComponent =  SettingsComponent();
            const startComponent = StartComponent()
            element.append(settingsComponent.element, startComponent.element)
            break;
        }
        case GAME_STATUSES.IN_PROGRESS:{
            const resultPanelComponent = ResultPanelComponent();
            localState.cleanupFunction.push(resultPanelComponent.cleanup)
            const gridComponent = GridComponent()
            localState.cleanupFunction.push(gridComponent.cleanup)
            element.append(resultPanelComponent.element,gridComponent.element)
            break;
        }
        case GAME_STATUSES.LOSE:{
            const loseComponent = LoseComponent()
            element.append(loseComponent.element)
            break;
        }
        case GAME_STATUSES.WIN:{
            const winComponent = WinComponent()
            element.append(winComponent.element)
            break;
        }
        default:
             throw new Error('not implemented')
    }

}