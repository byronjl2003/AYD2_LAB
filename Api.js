const {Router} = require('express');
module.exports = (router = new Router())=>{
router.get("/saludo",async(req,res)=>{
    console.log("ENTRE A SALUDO");
    response = {
        author:"Byron",
        mess:"Hola!"
     };
     
     res.end(JSON.stringify(response));
});
return router;
};