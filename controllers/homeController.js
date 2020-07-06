const fs = require('fs')
let dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const home = {
index:function(req, res){
     res.set({'content-type':'text/plain;charset=utf-8'})
     res.write('Bienvenido a Concesionarias DH... \n')
     res.write('\n')
     res.write('Estas son nuestras sucursales: \n\n')

     dbConcesionarias.forEach(function(sucursales){
            res.write(sucursales.sucursal + '\n')
        });
        res.end()
    }
}

module.exports = home