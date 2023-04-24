import { series } from './Data.js';
const tablabody = document.getElementById("series-table-body");
const promedio = document.getElementById("promedio");
function TablaDeSeries(series) {
    let sumatemporadas = 0;
    series.forEach(serie => {
        let tableRow = document.createElement("tr");
        tableRow.innerHTML = `<td> ${serie.numero} </td>
                              <td class="text-primary"> ${serie.nombre}  </td>
                              <td> ${serie.canal} </td>
                              <td> ${serie.temporadas} </td>`;
                              tablabody.appendChild(tableRow);
        sumatemporadas += serie.temporadas;
    });
    sumatemporadas /= series.length;
    promedio.innerHTML = `  Seasons average: ${sumatemporadas}`;
}
TablaDeSeries(series);