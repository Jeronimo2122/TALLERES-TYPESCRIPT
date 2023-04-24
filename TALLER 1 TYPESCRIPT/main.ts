
import { series } from './Data.js';

import {Serie} from "./Serie.js";

const tablabody: HTMLElement = document.getElementById("series-table-body")!;
const promedio: HTMLElement = document.getElementById("promedio")!;



function CosntruirTabla(series: Serie[]):void{
    let sumatemporadas = 0;
    series.forEach(serie => {
        let tableRow = document.createElement("tr");
        tableRow.innerHTML = `<td> ${serie.numero} </td>
                              <td> ${serie.nombre} </td>
                              <td> ${serie.canal} </td>
                              <td> ${serie.temporadas} </td>`;
        tablabody.appendChild(tableRow);
        sumatemporadas += serie.temporadas;
    });
    
    sumatemporadas /= series.length;
    promedio.innerHTML = `  Seasons average: ${sumatemporadas}`;
}
 
CosntruirTabla(series);