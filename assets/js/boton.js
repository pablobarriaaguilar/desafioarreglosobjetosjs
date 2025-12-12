export const rutaPropiedades = (ruta) =>{

    location.href = ruta;
}

document.querySelector("#verPropiedadesVentaBtn").addEventListener('click',()=>{
    rutaPropiedades("/desafioarreglosobjetosjs/assets/views/propiedades_venta.html")
})


document.querySelector("#verPropiedadesAlquilerBtn").addEventListener('click',()=>{
    rutaPropiedades("/desafioarreglosobjetosjs/assets/views/propiedades_alquiler.html")
})