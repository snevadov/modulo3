//Ejemplo para repositorio.

//Defino opciones
const opciones = {
	nombre: {
		alias:'n',
		demand:true
	},
	matematicas:{
		default:0,
		alias: 'm'
	},
	ingles:{
		default:0,
		alias: 'i'
	},
	programacion:{
		demand : true,
		alias: 'p'
	}
}

//Defino función fecha
let obtenerPromedio = (nota_uno, nota_dos, nota_tres) => (nota_uno+nota_dos+nota_tres)/3;

//manejo de yargs
const argv = require('yargs')
	.command('promedio','Calcular el promedio', opciones)
	.argv;

//permito exportación de la función y la constante
module.exports = {
	obtenerPromedio,
	argv
};