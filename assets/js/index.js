import { propiedades_alquiler } from "./ArregloPropiedades.js";

const container = document.querySelector("#containerPropiedadesAlquiler");

export const enAlquiler = (lista) => {

    let contenidoHtml = '';
    let contador = 0; 

    for (let propiedad of lista) {

        if (contador < 3) {   
            contador++;

            contenidoHtml += `
         <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} 

                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                
                   ${propiedad.smoke ? '<p class="text-success"> <i class="fas fa-smoking"></i> Permitido Fumar  </p>' : ' <p class="text-danger"><i class="fas fa-smoking-ban"></i> no se permite fumar </p>'}
               
                
                   ${propiedad.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas Permitidas </p>' : '<p class="text-danger"><i class="fas fa-ban"></i>No se permiten Mascotas     </p>'}
           
              </div>
            </div>
          </div>

        `;
        }
    }

    container.innerHTML = contenidoHtml;
};

enAlquiler(propiedades_alquiler);





import { propiedades_venta } from "./ArregloPropiedades.js";

const containerVenta = document.querySelector("#containerPropiedadesVenta");

export const enVenta = (lista) => {

    let contenidoHtmlVenta = '';
    let contadorVenta = 0;
    for (let propiedad of lista) {
        if(contadorVenta <3){
            contadorVenta = contadorVenta+ 1;
              contenidoHtmlVenta += `
        

            <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} 
                  
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                
                   ${propiedad.smoke ? '<p class="text-success"> <i class="fas fa-smoking"></i> Permitido Fumar  </p>' : ' <p class="text-danger"><i class="fas fa-smoking-ban"></i> no se permite fumar </p>'}
               
                
                   ${propiedad.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas Permitidas </p>' : '<p class="text-danger"><i class="fas fa-ban"></i>No se permiten Mascotas     </p>'}
           
              </div>
            </div>
          </div>

        `;
        }
      
    }

    containerVenta.innerHTML = contenidoHtmlVenta;
};

enVenta(propiedades_venta);
