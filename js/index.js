// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos la respuesta
        renderizarDatosUsuario(data.results[0]);
        console.log(data)
    });

function renderizarDatosUsuario(datos) {
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
    console.log(datos);

    contenedor = document.querySelector(".tarjeta"); 
    
    template = 
    ` <img src="${datos.picture.medium}" alt="${datos.imagenPerfilMedium}" ><br> 
    <p class="nombre">Nombre Completo: ${datos.name.title} ${datos.name.first} ${datos.name.last}</p><br> 
    <p class="email">Email: ${datos.email}</p> 
    `; 
    
    contenedor.innerHTML = template;
    
}

/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.

window.onload = () => {
    const boton = document.querySelector(".btnContainer").addEventListener("click", () => {
        fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos la respuesta
        renderizarDatosUsuario(data.results[0]);
        console.log(data)
    });
    });
}
