const constantes = require ("./constantes")

module.exports = {
    home: {
        titulo:constantes.home.titulo,
        totalEnCartelera:constantes.home.cantidad,
        listadoPeliculas:constantes.home.cuerpoHomes + "\n\n\n",
        pieDePagina: constantes.home.pieDePaginas

    },
    cartelera: {
        titulo:constantes.titulos.cartelera,
        totalPeliculas: constantes.home.cantidad+ "\n\n" ,
        listaCartelera:constantes.cartelera,
    },
    masVotadas: {
        titulo:constantes.titulos.masVistos,
        totalMasVotadas:constantes.masVotados.totalMasVistas + "\n",
        ratingPromedioTotal:constantes.masVotados.ratingPromedio + "\n\n\n" ,
        titulosSubSeccion:constantes.titulos.masVistosTitulo + " \n\n",
        titulosDePeliculas:constantes.masVotados.masVotadas + "\n\n",
        listadoDePeliculas:constantes.masVotados.peliculasMayorRating,
    },
    sucursales: {
        titulo: constantes.titulos.sucursales +"\n\n\n",
        totalSalas: "Por el momento tenemos a su disposicion: " + constantes.sucursales.salas + " sucursales"+"\n\n\n",
        listaSalas:"Nuestras sucursales son: " + "\n\n" + constantes.sucursales.listaSalas ,
    },
    contacto: {
        titulo:constantes.titulos.contacto + "\n\n\n" ,
        contacto:constantes.contactos,
    },
    preguntasFrecuentes: {
        titulo:constantes.titulos.preguntasFrecuentes + "\n\n\n",
        totalPreguntas:"Las preguntas mas realizadas son: " + constantes.preguntas.totalPreguntas+ "\n\n\n",
        listadoDePreguntas:"Dichas preguntas son: " +"\n\n"+ constantes.preguntas.listaPreguntas,
    },
}