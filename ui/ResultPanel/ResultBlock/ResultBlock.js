export function ResultBlock(text, data){
    const element = document.createElement('div')
    element.classList.add('result-block')

    const spanTitle = document.createElement('span')
    spanTitle.classList.add('result-title')
    spanTitle.innerText=text

    const spanResult = document.createElement('span')
    spanResult.classList.add('result')
    spanResult.innerText = data

    element.append(
        spanTitle,
        spanResult
    )

    return element
}