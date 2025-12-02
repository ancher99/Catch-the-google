import { Table } from "./Table/Table.js";



export function GridComponent() {
    const element = document.createElement('table')
    element.classList.add('table')
    

    element.append(Table())

    return element;
}