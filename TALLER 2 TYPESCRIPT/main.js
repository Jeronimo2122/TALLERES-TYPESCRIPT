import { series } from './Data.js';

const tablabody = document.getElementById("series-table-body");
const promedio = document.getElementById("promedio");
const card = document.getElementById("card");


function CosntruirTabla(series){
    let sumatemporadas = 0;
    series.forEach(serie => {
        let tableRow = document.createElement("tr");
        tableRow.innerHTML = `<td> ${serie.numero} </td>
                              <td class="text-primary serie-name"> ${serie.nombre} </td>
                              <td> ${serie.canal} </td>
                              <td> ${serie.temporadas} </td>`;
        tablabody.appendChild(tableRow);
        sumatemporadas += serie.temporadas;
    });
    
    sumatemporadas /= series.length;
    promedio.innerHTML = `  Seasons average: ${sumatemporadas}`;

    const serieNames = document.querySelectorAll('.serie-name');
    serieNames.forEach((name) => {
    name.addEventListener('click', (event) => {
    const serieName = event.target.innerText;
    addCard(serieName);
  });
}); 

}

function addCard(serieNom){
    let serie = findSerie(serieNom);
    card.innerHTML = `<div class="card" style="width: 18rem;">
                        <img class="card-img-top" src= "${serie.linkImagen}" alt="Card image cap">
                        <div class="card-body">
                        <h5 class="card-title">${serie.nombre}</h5>
                        <p class="card-text">${serie.descripcion}</p>
                        <a href="${serie.link}">Más información</a>
                        </div>
                        </div>`;    
    
}

function findSerie(serieNom){
    let serie = null;
    for (let i = 0; i<series.length; i++){
        if(series[i].nombre === serieNom){
           return serie = series[i];
        }
    }
    return null;
}

 
CosntruirTabla(series);