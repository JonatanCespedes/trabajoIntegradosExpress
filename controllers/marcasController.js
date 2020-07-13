const fs = require('fs');

const concesionariasJSON = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const marcas = {
    index: function(req,res) {
        res.set({'content-type': 'text/plain; charset=utf-8'});
        res.write('***************\n')
        res.write('Nuestras Marcas\n')
        res.write('***************\n')
        let autosOrdenados = [ ]
        concesionariasJSON.forEach(element => {
           element.autos.forEach(auto=>{
               autosOrdenados.push(auto.marca)
           })
        });
        for(let i=autosOrdenados.length -1; i >=0; i--){ // 'Cabe hacer notar que el recorrido del iterable se realiza en forma invertida. Esto se hace así porque al eliminar un elemento del iterable cambia su tamaño y cambian los índices de los elementos siguientes, si bien es posible manejar esto con un bucle hacia adelante se vuelve más complejo pues hay que ajustar el iterador lo cual es muy proclive a errores.' https://es.stackoverflow.com/questions/273597/eliminar-elementos-repetidos-de-un-array/273620
        if(autosOrdenados.indexOf(autosOrdenados[i])!== i)autosOrdenados.splice(i,1);
        } +'\n'; // Si el el valor encontrado con el indexOf al recorrer el array NO es igual al valor de la vuelta anterior cambia y reemplaza el elemento por el que corresponde (.splice())
        autosOrdenados.forEach(auto=>{
            res.write('- ' + auto + '\n')
        })
        
        res.end()
    },
    idMarcas: function(req, res){
        res.set({'content-type': 'text/plain; charset=utf-8'});
        res.write('***************\n')
        res.write('Nuestros Autos\n')
        res.write('***************\n')
        let idMarca = req.params.marca
        concesionariasJSON.forEach(element=>{
            element.autos.forEach(auto=>{
                if(auto.marca == idMarca){
                    res.write('\nMarca: ' + auto.marca + '\n');
                    res.write('Modelo: ' + auto.modelo + '\n');
                    res.write('Año: ' + auto.anio + '\n')
                    res.write('\n-------------------\n')
                }
            })
            
        })
        res.end()
    }
}

module.exports = marcas