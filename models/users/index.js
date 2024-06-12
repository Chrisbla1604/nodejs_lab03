
const UserSchemas = require('../../schemas/userschemas')

const saveOneUser = function(register,callback){

    console.log('funcion SaveOneuser');

    const{
           nombre,correo,telefono,identificacion,
           marca,modelo,placa,nivelgasolina,observaciones,
           cambiofrenos=false,cambioaceite=false,diagnosticogeneral=false,
           alineacionbalanceo=false,sistemaelectrico=false} = register;

    const newdbregister = new UserSchemas({
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        identificacion: identificacion,
        marca: marca,
        modelo: modelo,
        placa: placa,
        nivelgasolina: nivelgasolina,
        observaciones: observaciones,
        cambiofrenos: cambiofrenos,
        cambioaceite: cambioaceite,
        diagnosticogeneral: diagnosticogeneral,
        alineacionbalanceo: alineacionbalanceo,
        sistemaelectrico: sistemaelectrico
    })
    .save()
    .then((dbregister)=> {
          console.log('New user:', dbregister);
          return callback(null,dbregister);  
    })
    .catch((error)=>{
         console.log('Error:',error);
         return callback(error);
    })
}



const getalldata = function(callback){

    UserSchemas.find() 
        .then((datafound)=>{
             console.log('Object Found:',datafound);
             return callback(null,datafound);
        })
        .catch((error)=>{
        console.log('Error:',error);
        return callback(error);
    })
}



module.exports = {
    saveOneUser,
    getalldata
};


