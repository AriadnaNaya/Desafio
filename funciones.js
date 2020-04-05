module.exports = {
    cantidadDePeliculas : function (objeto){ 
        return String(objeto.total_movies);
    },
    listadoDePeliculas: function (titulos) {
        let ordenadas = titulos.sort();
        let lista = "";
        ordenadas.forEach((element) => {
            lista += element + "\n";
        })
        return lista
    },
    
    pieDePagina: function  (pie) {
        let pieDePagina = ""
        pie.forEach ((categoria,index) => {
            pieDePagina += ((index +1) + " " + categoria + "\n")
        }
        )
        return pieDePagina
    },
    listados : function listados (peliculas) {
        let titulitos = peliculas.movies.map(function(obj) {
            return obj.title;
        })
        return titulitos
        },
    
    cuerpoHome : function cuerpoHome (peliculas) {
            let titulitos = this.listados (peliculas)
            let listado = "Listado de peliculas: " + "\n\n" + this.listadoDePeliculas (titulitos)
            return listado
        },
    carteleras: function (peliculas) {
            let cartelera = ""
            for (var i= 0; i < peliculas.movies.length; i++) {
                cartelera += (i+1) + ") " + peliculas.movies [i].original_title + ": " + "\n" + "    i) Titulo: " + (peliculas.movies [i].title + "\n" + "    ii) Reseña: " + peliculas.movies [i].overview + "\n\n")
            }
            console.log (typeof(cartelera))
            return cartelera
        },
    masVotadas:function (peliculas) {
            let mayorRaiting= peliculas.movies.filter (function (raiting){
                return raiting.vote_average >= 7
            })
            return mayorRaiting
        },
    titulosMasVotados: function (peliculas) {
            let prueba = this.masVotadas (peliculas)
            var titulos = ""
            for (let i = 0 ; i < prueba.length; i++) {
                titulos += "  "+ prueba [i].title + "\n"
            }
            return titulos
        },
    totalMasVotadas: function (peliculas) {
            let peliculasMasVotadas = this.masVotadas (peliculas)
            let contador = peliculasMasVotadas.length
            return contador
        },
    listadoMasVotadas: function (peliculas) {
            let peliculasMasVotadas = this.masVotadas (peliculas)
            let listado = ""
            for (var i = 0; i < peliculasMasVotadas.length; i++) {
                listado += (i+1) + ") " + peliculasMasVotadas [i].title + "\n" + "    Con un raiting de: " + peliculasMasVotadas [i].vote_average + "\n"  + "    Resumen: " + peliculasMasVotadas [i].overview + "\n\n"
            }
            return listado
        },
    listaSucursales: function (salas) {
            let cines = ""
            for (var i =0; i < salas.theaters.length; i++) {
                cines += (i+1) + ") " + salas.theaters [i].name+ ": " + "\n" + "    Direccion; " + salas.theaters[i].address + "\n" +"    Descripcion: " + salas.theaters[i].description + "\n\n"
            }
            return cines
        },
    listaPreguntasFrecuentes: function (faqs) {
            let preguntas = "" 
            for (var i=0 ; i < faqs.faqs.length; i++) {
                preguntas +=(i+1) + ") " + "Pregunta:" + faqs.faqs[i].faq_title+ ": " + "\n" + "   Respuesta:" + faqs.faqs[i].faq_answer + "\n\n"
            }
            return preguntas
        },
    ratingPromedio: function (peliculas) {
            let peliculasMasVotadas = this.masVotadas (peliculas)
            let contador = 0
            let sumatoria = 0
            for (var i = 0; i < peliculasMasVotadas.length; i++) {
                sumatoria += peliculasMasVotadas [i].vote_average
                contador +=1
            }
            return String(sumatoria/contador)
        }

}