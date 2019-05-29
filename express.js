/*Requiere instalar express
Se instala en el repositorio con:
	> npm i express
Abre el puerto 3000: localhost:3000
*/
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('<b> Hello World </b>')
})
 
app.listen(3000)