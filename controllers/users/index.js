const express = require('express');
const router = express.Router();

const users = require('../../models/users');


//Here the models

    
router.post('/',(request,response)=>{
    
    console.log('Metodo POST userregisters') ;

    return users.saveOneUser({...request.body}, (error,result)=>
    {
      if(error){
        return response.status(500).json({message:'Server error'});
      }

    return response.json({code:'OK', message:'Data save successful'});
    });

});

router.get('/data',(request,response)=>{

  console.log('GET all user registered from Mongo Data Base') ; 

  return users.getalldata((error,result)=>
    { 
      if(error){
        return response.status(500).json({message:'Server error'});
      }
      else
      {
        if(result.length!=0){
          
          return response.json({code:'OK', message:'Data sended successful',data:{table:result, code:true}});
        }
        else{
          console.log('Base de datos Vacia');
          return response.json({code:'OK', message:'Data sended successful',data:{table:result, code:false}});

        }
      }
    });
      
});

module.exports = router;