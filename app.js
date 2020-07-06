const express = require ('express');
const app = express();

app.listen(3030, () => console.log("El servidor esta funcionando en el puerto 3030"))

const routesAutos = require('./routes/autos')
const routesHome = require('./routes/home')
const routesMarcas = require('./routes/marcas')
const routesSucursales = require('./routes/sucursales')

app.use('/', routesHome)
app.use('/sucursales', routesSucursales)
app.use('/marcas', routesMarcas)
app.use('/autos', routesAutos)