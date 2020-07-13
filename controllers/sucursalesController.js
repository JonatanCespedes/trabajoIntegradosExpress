const fs = require('fs');

const concesionariasJSON = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));




const sucursales = {
    index: function(req,res) {
        res.set({'content-type': 'text/plain; charset=utf-8'});
        res.write('*********************************\n')
        res.write('Bienvenido a nuestras sucursales \n') 
        res.write('*********************************\n')
        concesionariasJSON.forEach(element=>{
            res.write('Sucursal: \n'+ element.sucursal + '\n' + 'Dirección: ' + element.direccion + '\n' + 'Teléfono: ' + element.telefono + '\n')
        })
        res.end();
    },
    idsuc: function(req, res){
        res.set({'content-type': 'text/plain; charset=utf-8'});
        let idSucursal = req.params.sucursal
        concesionariasJSON.forEach(function(element){
            if(element.sucursal==idSucursal){
                res.write('Sucursal: \n' + element.sucursal + '\nDireccion: ' + element.direccion + '\nTeléfono: ' + element.telefono + '\n\n');
                res.write('Vehículos disponibles en ésta sucursal: \n\n');
                element.autos.forEach(function(auto){
                    res.write('\n')
                    res.write('Marca: ' + auto.marca)
                    res.write('\n')
                    res.write('Modelo: ' + auto.modelo)
                    res.write('\n')
                    res.write('Año: ' + auto.anio)
                    res.write('\n')
                    res.write('Color: ' + auto.color + '\n')
                    res.write('______________________\n')
                })
                res.end();
            }
        })
        res.send('Sucursal no válida')
    },

}

module.exports = sucursales