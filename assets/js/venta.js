import { propiedades_venta } from "./ArregloPropiedades.js";

const container = document.querySelector("#containerPropiedadesVenta");

export const enVenta = (lista) => {

    let contenidoHtml = '';

    for (let propiedad of lista) {
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
                <p class="card-text">${propiedad.descripcion}</p>

                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>

                <p><i class="fas fa-bed"></i> ${propiedad.habitaciones}</p>

                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>

                ${propiedad.smoke 
                    ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido Fumar</p>' 
                    : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}

                ${propiedad.pets 
                    ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas Permitidas</p>' 
                    : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten Mascotas</p>'}
              </div>
            </div>
          </div>
        `;
    }

    container.innerHTML = contenidoHtml;
};

enVenta(propiedades_venta);
