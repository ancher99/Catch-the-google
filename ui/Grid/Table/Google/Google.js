import { catchGoogle } from "../../../../data/state-manager.js";

export function Google(){
    const googleElement = document.createElement('img');
    googleElement.src = 'img/icons/googleIcon.svg'
    googleElement.addEventListener('click', () => {
    catchGoogle();
})

  return googleElement
}