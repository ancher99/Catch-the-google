import { start } from "../../../core/state-manager.js";



export function StartComponent(){
    const element = document.createElement('button');
    element.classList.add('button')
    element.classList.add('main-button')
    element.innerText='START GAME'
    render(element);

    return {element};
}


async function render(element) {
    
    element.addEventListener('click', () =>{
        start()
    })
}