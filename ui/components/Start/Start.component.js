import { start } from "../../../core/state-manager.js";

export function StartComponent(){
    const element = document.createElement('div');
    const button = document.createElement('button')

    render(element);

    return {element};
}


async function render(element) {
    const button = document.createElement('button')
    button.append('StartGame')
    button.addEventListener('click', () =>{
        start()
    })
    element.append(button)
}