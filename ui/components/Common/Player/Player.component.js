export function PlayerComponent (playerNumber){
    const element = document.createElement('img')

    render(element,playerNumber)

    return {element}
}


async function render(element,playerNumber) {
    element.src=`../img/icons/man0${playerNumber}.svg`
}