const fs = require('fs');

const concesionariasJSON = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const home = {
    bienvenida: function(req,res) {
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write('****************************\n')
        res.write('Bienvenidos a nuestra página\n')
        res.write('****************************\n')
        res.write('Empresa líder del mercado. \n\n\n');
        res.write('Puede encontrarnos en : \n\n')
        concesionariasJSON.forEach(element => {
            res.write(element.sucursal + '\n\n');   
        });
        res.end()

    }
    
}



module.exports = home