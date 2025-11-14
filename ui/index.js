import { AppComponent } from "./components/app.components.js";


const rootElement = document.getElementById('root')

function renderApp() {

   rootElement.innerHTML='';

    const appComponent = AppComponent()

    rootElement.append(appComponent.element)

}

renderApp()



