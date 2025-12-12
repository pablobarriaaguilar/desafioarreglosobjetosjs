import { propiedades_alquiler } from "./ArregloPropiedades.js";

const container = document.querySelector("#containerPropiedades");

export const enAlquiler = (lista) => {

    let contenidoHtml = '';

    for (let propiedad of lista) {
        contenidoHtml += `
            <div>
                <h3>${propiedad.nombre}</h3>
                <p>${propiedad.descripcion}</p>
                <p>Habitaciones: ${propiedad.habitaciones}</p>
                <p>Precio: $${propiedad.costo}</p>
                <p>${propiedad.smoke ? "Se permite fumar" : "No se permite fumar"}</p>
                <p>${propiedad.pets ? "Se permiten animales" : "No se permiten animales"}</p>
            </div>
        `;
    }

    container.innerHTML = contenidoHtml;
};

enAlquiler(propiedades_alquiler);
