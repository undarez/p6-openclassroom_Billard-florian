const express = require('express');
const app = express();
// ========>>>>>>> les authorizations
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
// (app.use((req, res) =>{
//     res.json({message:'requete reçu !'});
//     next()
// });) ======>>>>>>>> middleware
app.use((req, res, next) =>{
    res.json({message:'requete reçu !'});
    next()
});
// le status 201 correspond au serveur qui fonctionne correctement
app.use ((req, res, )=>{
    res.status(201)
    // next();
})
// le serveur ne peut pas comprendre ou traiter la requête en raison d'une erreur côté client 
// app.use ((req,res,)=>{
//     res.status(400)
//     res.json({message:'erreur serveur HTTP 400 Bad Request'});
// })

module.exports = app;