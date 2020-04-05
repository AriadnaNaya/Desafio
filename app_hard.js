const http = require('http');
const fs = require('fs');
const archivo = fs.readFileSync('./movies.json', "utf-8");
const peliculas = JSON.parse(archivo);

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	// Route System
	switch (req.url) {
		// Home
		case '/':
			let titulo = "Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.\n\n";
			let cantidad = "Total de peliculas en cartelera:" + cantidadDePeliculas(peliculas) + "\n\n";
			let listado = "";
			let titulos = peliculas.movies.map(function(obj) {
				return obj.title;
			});
			let ordenadas = titulos.sort();
			ordenadas.forEach((element) => {
				listado += element + "\n";
			});
			// ME VOY A COMER EMA, DESP LO SIGO VIENDO.
			
			// dale yo ahora te mando todo.
			//igual dejo compartido el codigo aca... mientras tanto. vuelvo de comer y te lo envio si?
			// SI, TRANK, no te hagas problema
			//buen finde emma!!
			res.end(titulo + cantidad + listado);
			break;
		// En cartelera
		case '/en-cartelera':
			res.end('En cartelera');
			break;
		case '/mas-votadas':
			res.end('Más Votadas');
			break;
		case '/sucursales':
			res.end('Sucursales');
			break;
		case '/contacto':
			res.end('Contacto');
			break;
		case '/preguntas-frecuentes':
			res.end('Preguntas Frecuentes');
			break;
		default:
			res.end('404 not found')
	}
	// ¿? 
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));

function cantidadDePeliculas(objeto){ 
	return String(objeto.total_movies);
}

