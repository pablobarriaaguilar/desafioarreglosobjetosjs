import { propiedades_venta } from "./ArregloPropiedades.js";

const container = document.querySelector("#containerPropiedades");

export const enVenta = (lista) => {

    let contenidoHtml = '';

    for (let propiedad of lista) {
        contenidoHtml += `
            <div>
                <h3>${propiedad.nombre}</h3>
                <p>${propiedad.descripcion}</p>
                <p>Habitaciones: ${propiedad.habitaciones}</p>
                <p>Precio: $${propiedad.costo}</p>
            </div>
        `;
    }

    container.innerHTML = contenidoHtml;
};

enVenta(propiedades_venta);
