export function ResultBlock(text, data, id){
    const element = document.createElement('div')
    element.classList.add('result-block')

    const spanTitle = document.createElement('span')
    spanTitle.classList.add('result-title')
    spanTitle.innerText=text

    const img = document.createElement('img')
    if(id === 0){
        img.src ='img/icons/googleIcon.svg'
    }
    if(id>0){
        img.src=`img/icons/man0${id}.svg`
    }
    if(id === undefined){
        img.setAttribute('display', 'none')
    }
    

    const spanResult = document.createElement('span')
    spanResult.classList.add('result')
    spanResult.innerText = data

    element.append(
        spanTitle,
        img,
        spanResult
    )

    return element
}