import { getGridSize, subcribe, unsubcribe } from "../../../core/state-manager.js";
import { CellComponent } from "./Cell/Cell.components.js";


export function GridComponent(){
    const localState ={cleanupFunctions:[]}
    const element = document.createElement('table');
    element.classList.add('grid')

   render(element, localState)

    return {element, cleanup: () => { localState.cleanupFunctions.forEach(cf =>cf())}
    };
}

async function render(element,localState) {
    console.log('grid component render')

    localState.cleanupFunctions.forEach(cf=>cf())
    localState.cleanupFunctions=[]
    element.innerHTML='';
    const gridSizePromise = getGridSize()
    const gridSize = await gridSizePromise
  
    for (let y=0; y<gridSize.rowsCount;y++ ){
        const rowElement = document.createElement('tr')

        for (let x=0; x<gridSize.columnCount;x++){
            const cellComponent = CellComponent(x,y)
            
            localState.cleanupFunctions.push(cellComponent.cleanup)
            rowElement.append(cellComponent.element)
        }
        element.append(rowElement) 
    }

    
}