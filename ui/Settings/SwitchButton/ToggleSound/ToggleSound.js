export function ToggleSound(){
    const container = document.createElement('button')
    container.classList.add('toggle')

    container.onclick =() =>{
        container.classList.toggle('on');  
    }
 
    const spanElement = document.createElement('span')
    spanElement.classList.add('icon-slider')

    container.append(
        spanElement
    )

    return container
}