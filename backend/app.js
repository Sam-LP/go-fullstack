import express from "express";
import env from './config/env.js';
import connectToDB from './config/db.js';
import stuffRoutes from './routes/stuff.js';

connectToDB(env.env)

const app = express();

// Middlewares de parsing (doivent être en premier)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // * = tout le monde peut utilser cette route
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // Accès à l'API
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // CRUD
  next();
});

// GET
app.get('/', (req, res, next) => {

  
  res.status(200).json({message: "Bienvenue sur l'API de l'application Gazette"});
});

//Lien vers les routes crées

app.use('/stuff', stuffRoutes)

app.listen(process.env.SERVER_LISTENING_PORT, () => {
  console.info(`Server Started at http://localhost:${process.env.SERVER_LISTENING_PORT}`)
})
