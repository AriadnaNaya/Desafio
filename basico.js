const fs = require('fs');
const archivo = fs.readFileSync('./movies.json', "utf-8");
const archivoFaqs = fs.readFileSync ("./faqs.json")
const archivoSucursales = fs.readFileSync ("./theaters.json")

module.exports = {
    salas: JSON.parse (archivoSucursales),
    faqs:JSON.parse (archivoFaqs),
    pie:["En Cartelera" ,"Mas Votadas", "Sucursales", "Contacto", "Preguntas Frecuentes"],
    peliculas:JSON.parse(archivo),

}