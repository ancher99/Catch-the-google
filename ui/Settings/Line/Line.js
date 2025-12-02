import { changeSettingsGrid, changePointsLose,changePointsWin } from "../../../data/state-manager.js";

export function Line(title, valueElem, index){
    const element = document.createElement('div');
    element.classList.add('line');
    console.log(title, valueElem, index)
    const label = document.createElement('label');
    label.innerText = title;
    label.setAttribute('for', `0${index + 1}`);

    const select = document.createElement('select');
    select.setAttribute('name', 'select')
    select.setAttribute('id', `0${index + 1}`);
    if (select.id === '01') {
        select.addEventListener('change', changeSettingsGrid);
    } else if (select.id === '02') {
        select.addEventListener('change', changePointsWin);
    }
    else if (select.id === '03') {
        select.addEventListener('change', changePointsLose);
    }



    valueElem.forEach((value) => {
        const option = document.createElement('option');
        option.value = value;
        option.text = value;
        select.append(option);
    });



    element.append(label, select)

    return element;
}