import { GAME_STATUSES } from "../data/constants.js";
import { getGameStatus } from "../data/state-manager.js";
import { LoseComponent } from "./Lose/Lose.component.js";
import { GridComponent } from "./Grid/Grid.component.js";
import { ResultPanelComponent } from "./ResultPanel/ResultPanel.component.js";
import { WinComponent } from "./Win/WinComponent.js";
import { SettingsComponent } from "./Settings/SettingsComponent.js";

export function AppComponent() {
    const element = document.createElement('section')
    element.classList.add('container')

    const status = getGameStatus();

    const transitions = {
        [GAME_STATUSES.IN_PROGRESS]: () => {
            const resultPanelElement = ResultPanelComponent();
            element.append(resultPanelElement);
            const gridElement = GridComponent();
            element.append(gridElement);
        },
        [GAME_STATUSES.LOSE]: () => {
            const loseElement = LoseComponent();
            element.append(loseElement);
        },
        [GAME_STATUSES.SETTINGS]: () => {
            const settingsElement = SettingsComponent();
            element.append(settingsElement);
        },
        [GAME_STATUSES.WIN]: () => {
            const winElement = WinComponent()
            element.append(winElement)
        },
    }

    transitions[status]();
    
    return element;
}