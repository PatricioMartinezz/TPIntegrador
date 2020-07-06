const fs = require('fs')
const dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const auto = {
    index:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        let cantidad = 0;
        dbConcesionarias.forEach(element => {
            cantidad += element.autos.length})
        res.write('Contamos con ' + cantidad + ' vehiculos en nuestras sucursales \n\n')
        dbConcesionarias.forEach(function(elemento){
            elemento.autos.forEach(function(auto){
                res.write('Marca: ' + auto.marca + '\n' + 'Modelo ' + auto.modelo + '\n' + 'Anio: ' + auto.anio + '\n' + 'Color: ' + auto.color + '\n\n')
            })
        })
        res.end()
    },
    id:function(req, res){
            res.set({'content-type':'text/plain;charset=utf-8'})
            let idMarca = req.params.marca;
            res.write ("Total de unidades disponibles: "  + idMarca +'\n\n');
            dbConcesionarias.forEach(function(sucursal){
                sucursal.autos.forEach(function(autos){
                    if(autos.marca == idMarca){
                     res.write("-MARCA: " + autos.marca + '\n' + "-MODELO: " + autos.modelo + '\n' + "-AÑO: " + autos.anio + '\n' + "-COLOR " + autos.color + '\n')
                    res.write("-----" + '\n') }           
                })
             })
           res.end()
        }
    }

module.exports = auto;

