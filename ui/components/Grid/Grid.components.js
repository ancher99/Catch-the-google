import { getGridSize, subcribe, unsubcribe } from "../../../core/state-manager.js";
import { CellComponent } from "./Cell/Cell.components.js";


export function GridComponent(){
    const element = document.createElement('table');
    element.classList.add('grid')

    const observer = () =>{
        render(element)
    }
    subcribe(observer)

   render(element)

    return {element, cleanup: () => {
        unsubcribe(observer)}
    };
}

async function render(element) {
    console.log('grid render')
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