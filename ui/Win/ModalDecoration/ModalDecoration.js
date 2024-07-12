export function ModalDecoration(){
    const element = document.createElement('div')
    element.classList.add('modal-decoration')

    const imgElement = document.createElement('img');
    imgElement.src = 'img/icons/winnerIcon.svg'

    element.append(
        imgElement
    )

    return element
}