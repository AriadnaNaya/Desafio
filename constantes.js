const basicos = require ("./basico.js")
const funciones = require ("./funciones.js")

module.exports = {
    home: {
        cuerpoHomes: funciones.cuerpoHome (basicos.peliculas),
        pieDePaginas: "Recordá que podes visitar las secciones: " + "\n\n" + funciones.pieDePagina (basicos.pie),
        titulo : "Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.\n\n",
        cantidad : "Total de peliculas: " + " " + funciones.cantidadDePeliculas(basicos.peliculas) + "\n\n",
    },
    titulos: {
        cartelera: " En Cartelera: " + "\n\n\n\n",
        masVistos: "Aqui estan las peliculas mas votadas!!" + "\n\n\n",
        masVistosTitulo: "Los titulos son los siguiente: ",
        sucursales: "Nuestras Salas: ",
        contacto: "Contactenos para mas informacion!!",
        preguntasFrecuentes: "Preguntas Frecuentes: "
    },
    masVotados: {
        totalMasVistas:"Las peliculas mas Vistas son: "+ funciones.totalMasVotadas (basicos.peliculas),
        masVotadas: funciones.titulosMasVotados (basicos.peliculas),
        peliculasMayorRating: funciones.listadoMasVotadas (basicos.peliculas),
        ratingPromedio: "El rating promedio de estas peliculas es: " + funciones.ratingPromedio (basicos.peliculas)
    },
    cartelera: funciones.carteleras (basicos.peliculas),
    sucursales:{ 
        salas: basicos.salas.total_theaters,
        listaSalas: funciones.listaSucursales (basicos.salas),
    },
    contactos: "¿Tenés algo para contarnos? Nos encanta escuchar a nuestros clientes. Si deseas contactarnos podés escribirnos al siguiente email: dhmovies@digitalhouse.com o en las redes sociales. Envianos tu consulta, sugerencia o reclamo y será respondido a la brevedad posible. Recordá que también podes consultar la sección de Preguntas Frecuentes para obtener respuestas inmediatas a los problemas más comunes.",
    preguntas: {
        totalPreguntas: basicos.faqs.total_faqs,
        listaPreguntas: funciones.listaPreguntasFrecuentes (basicos.faqs)
    },

}