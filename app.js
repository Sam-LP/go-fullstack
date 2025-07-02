const express = require('express'); // intermédiaire requête => serveur
const app = express();

app.use((req, res, next) => { // middleware (cnsole)
console.log('test request');
next();

});
//middleware 1
app.use((req,res,next) => {
    res.status(201);
    next();

});
//middleware 2
app.use((req,res,next) => {
    res.json({ message: 'Votre requête a bien été reçue'}); // Réponse envoyée au serv, via postman
    next();
});

app.use((req,res) => { // 3
    console.log('Réponse envoyée avec succès');

});
module.exports = app;