

const express = require('express');
const router = express.Router();

 router.get('/',(request,response)=>{

    console.log('GET render de Carshop app') ;  
        response.render('ejs/servercarshop/index');
});
        
module.exports = router;