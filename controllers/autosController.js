const fs = require('fs');

const concesionariasJSON = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const autos = {
    index: function(req,res) {
        res.write('********************\n')
        res.write('Todos nuestros autos\n')
        res.write('********************\n')
        concesionariasJSON.forEach(element => {
            element.autos.forEach(auto=>{
                res.write('-> ' + auto.marca + ' ' + auto.modelo + '\n')
            })
        });
        res.end()
    },
    idMarca: function(req, res){
        res.set({'content-type': 'text/plain; charset=utf-8'});
        res.write('********************************************************\n')
        res.write('Éstos son los modelos disponibles de la marca que eligió\n')
        res.write('********************************************************\n')
        concesionariasJSON.forEach(element=>{
        let idMarca = req.params.marca  
            element.autos.forEach(auto=>{
                if(auto.marca == idMarca){
                    res.write('\nMarca: ' + auto.marca + '\n');
                    res.write('Modelo: ' + auto.modelo + '\n');
                    res.write('Año: ' + auto.anio + '\n');
                    res.write('Color: ' + auto.color + ('\n'));
                    res.write('________________________\n')
                }
            })

        })
        res.end();
    },
    
    idDato: function(req, res){
        res.set({'content-type': 'test/plain; charset=utf-8'});
        concesionariasJSON.forEach(element=>{
            let idDatoAnio = req.params.dato
            element.autos.forEach(auto=>{
                if(auto.anio == idDatoAnio){
                    res.write('\nMarca: ' + auto.marca + '\n');
                    res.write('Modelo: ' + auto.modelo + '\n');
                    res.write('Año: ' + auto.anio + '\n');
                    res.write('Color: ' + auto.color + ('\n'));
                    res.write('________________________\n')
                }
            })
        })
        res.end();
    }
}

module.exports = autos