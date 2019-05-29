/*Requiere instalar express
Se instala en el repositorio con:
	> npm i express
Abre el puerto 3000: localhost:3000
*/

//Ejemplo para repositorio.
//Ejecuta con:
// >node index.js promedio --n='juan' --m=1 --i=1 --p=5
//Requerimos Yargs >npm i yargs
const {obtenerPromedio, argv} = require('./datos.js');
const express = require('express')
const app = express()

console.log(argv);
if(argv._[0]=='promedio'){
	texto = ('El promedio de ' + argv.n + ' es ' + obtenerPromedio(argv.m,argv.i,argv.p));
}
else {
	texto = ('Promedio no calculado');
}


 
app.get('/', function (req, res) {
  res.send(texto)
})
 
app.listen(3000)