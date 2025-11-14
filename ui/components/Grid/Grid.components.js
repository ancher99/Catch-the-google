import { getGridSize, subcribe } from "../../../core/state-manager.js";
import { CellComponent } from "./Cell/Cell.components.js";


export function GridComponent(){
    const element = document.createElement('table');
    element.classList.add('grid')
    
    subcribe(() =>{
        render(element)
    })

   render(element)

    return {element};
}

async function render(element) {
    element.innerHTML='';
    const gridSizePromise = getGridSize()
    const gridSize = await gridSizePromise
  
    for (let y=0; y<gridSize.rowsCount;y++ ){
        const rowElement = document.createElement('tr')

        for (let x=0; x<gridSize.columnCount;x++){
            const cellComponent = CellComponent(x,y)
            rowElement.append(cellComponent.element)
        }
        element.append(rowElement) 
    }

    
}