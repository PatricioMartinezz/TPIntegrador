const fs = require('fs')
let dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const sucursales = {
    index: function(req, res){
    res.set({'content-type':'text/plain;charset=utf-8'})
    res.write('¡Hola!, Estas son nuestras sucursales: \n\n')
    dbConcesionarias.forEach(function(sucursales){
        res.write(sucursales.sucursal + '\n' + sucursales.direccion + '\n' + sucursales.telefono + '\n' + '\n')
    });
    res.end()
  },
    id:function(req, res){
       res.set({'content-type':'text/plain;charset=utf-8'})
       let idSucursales = req.params.sucursal
       dbConcesionarias.forEach(function(concesionarias){
       if (concesionarias.sucursal == idSucursales){
          res.write('******************************************************************************************************************************************' + '\n' + '* ' +'Sucursal: ' + concesionarias.sucursal + '                                                                                                                        *' + '\n' + '* ' + 'Dirección: '+ concesionarias.direccion + '                                                               *' + '\n' + '* ' + 'Telefono: ' + concesionarias.telefono + '                                                                                                              *' + '\n' + '******************************************************************************************************************************************' +'\n' + '\n')
          res.write('Contamos con esta cantidad de vehiculos: ' + concesionarias.autos.length + '\n' + '\n')
          concesionarias.autos.forEach(autos => {
            res.write('Marca: ' + autos.marca + '\n' + 'Modelo: ' + autos.modelo + '\n' + 'Anio: ' + autos.anio + '\n' + 'Color: ' + autos.color + '\n' + '\n' )
          });
          res.end()
        }
      })
      res.send('Lo sentimos, No se encontró esa sucursal...')
        }
    }
module.exports = sucursales