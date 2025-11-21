import { getOptionData } from "../../../core/state-manager.js";
import { Line } from "./Line/Line.js";
import { SwitchButton } from "./SwitchButton/SwitchButton.js";


export function SettingsComponent(){
    const element = document.createElement('div');
    element.classList.add('top-items')

    const settings =  getOptionData()

    settings.forEach((item, index) => {
        element.append(
            Line(item.label, item.value, index)
        
        )
    })

    render(element)

    return {element};
}

async function render(element) {
    element.append(SwitchButton())
}