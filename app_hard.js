const http = require('http');
const respuestas = require ("./response.js")

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	switch (req.url) {
		case '/':
			res.end (respuestas.home.titulo + respuestas.home.totalEnCartelera + respuestas.home.listadoPeliculas + respuestas.home.pieDePagina)
			break;
		case '/en-cartelera':
			res.end (respuestas.cartelera.titulo + respuestas.cartelera.totalPeliculas + respuestas.cartelera.listaCartelera)
			break;
		case '/mas-votadas':
			res.end (respuestas.masVotadas.titulo + respuestas.masVotadas.totalMasVotadas + respuestas.masVotadas.ratingPromedioTotal + respuestas.masVotadas.titulosSubSeccion + respuestas.masVotadas.titulosDePeliculas + respuestas.masVotadas.listadoDePeliculas)
			break;
		case '/sucursales':
			res.end(respuestas.sucursales.titulo + respuestas.sucursales.totalSalas + respuestas.sucursales.listaSalas);
			break;
		case '/contacto':
			res.end(respuestas.contacto.titulo + respuestas.contacto.contacto);
			break;
		case '/preguntas-frecuentes':
			res.end(respuestas.preguntasFrecuentes.titulo + respuestas.preguntasFrecuentes.totalPreguntas + respuestas.preguntasFrecuentes.listadoDePreguntas );
			break;
		default:
			res.end('404 not found')
	}
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));



