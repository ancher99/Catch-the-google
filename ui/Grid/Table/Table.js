import { getGridSize, getGooglePosition } from "../../../data/state-manager.js";
import { CellComponent } from "./CellComponent/CellComponent.js";
import { Google } from "./Google/Google.js";

export function Table(){
    const element = document.createElement('tbody')

    const gridSize = getGridSize();
    const googlePosition = getGooglePosition();

    for (let y = 0; y < gridSize.height; y++) {
        const rowElement = document.createElement('tr')

        for (let x = 0; x < gridSize.width; x++) {
            // todo: move to CellComponent
            // const cellElement = CellComponent(x,y)
            const cellElement = document.createElement('td')
            cellElement.classList.add('cell')
            
            if (googlePosition.x === x && googlePosition.y === y) { 
                // todo: const googleElement = Google();
            const googleElement = Google()
            cellElement.append(googleElement)
            }
            rowElement.append(cellElement)
        }
    
        element.append(rowElement);
    }

    return element
}