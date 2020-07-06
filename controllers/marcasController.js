const fs = require('fs')
let dbMarcas = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const marcas = {
    index:function(req, res){
        res.set({'content-type':'text/plain;charset=utf-8'})
         let marcas = []
         dbMarcas.forEach(function(sucursal){
             sucursal.autos.forEach(function(auto){
                if(!marcas.includes(auto.marca)){
                    marcas.push(auto.marca)
                }
            })
         })
         res.write('**************************************************')
         res.write('\n')
         res.write('Estas son las marcas con las que contamos: ')
         res.write('\n')
         res.write('**************************************************')
         res.write("\n\n")
         marcas.forEach(marca=>{
           res.write("Marca: " + marca + "\n")
         })
          res.end()     
        },
    
    id:function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        let idMarcas = req.params.marcas
        res.write('Autos de marca: ')
        dbMarcas.forEach(function(sucursal){
            sucursal.autos.forEach(function(auto){
                if(auto.marca == idMarcas){
                    res.write('\n\n' + auto.marca + '\n' + auto.modelo + '\n' + auto.anio + '\n') 
                }
            })
        })
        res.end('Lo sentimos, no encontramos la marca solicitada en nuestras sucursales')
    }
    }
module.exports = marcas