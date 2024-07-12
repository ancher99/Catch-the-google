import { getOptionData } from "../../data/state-manager.js"
import { Line } from "./Line/Line.js"
import { SwitchButton } from "./SwitchButton/SwitchButton.js"
import { ButtonStart } from "./ButtonStart/ButtonStart.js"


export function SettingsComponent(){
    const element = document.createElement('div')
    element.classList.add('top-items')

    let settings = getOptionData()
    
    settings.forEach((item, index) => {
        element.append(
            Line(item.label, item.value, index)
        )
    })

    element.append(
        SwitchButton(),
        ButtonStart()
    )

    return element
}