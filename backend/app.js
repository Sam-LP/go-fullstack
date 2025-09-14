import express from "express";
import env from './config/env.js';
import connectToDB from './config/db.js';
import stuffRoutes from './routes/stuff.js';
import bodyParser from "body-parser";

connectToDB(env.env)

const app = express();

app.use(express.json());
app.use(bodyParser.json())
//middleware général utilisé par toutes les routes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // * = tout le monde peut utilser cette route
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // Accès à l'API
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // CRUD
  next();
});

// GET
app.get('/', (req, res, next) => {

  const stuff = [
    {
      _id: 'oeihfzeoi',
      title: 'Mon premier objet',
      description: 'Les infos de mon premier objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 2900,
      userId: 'qsomihvqios',
    },

  ];
  res.status(200).json(stuff);
});

//Lien vers les routes crées

app.use('/stuff', stuffRoutes)

app.listen(process.env.SERVER_LISTENING_PORT, () => {
  console.info(`Server Started at http://localhost:${process.env.SERVER_LISTENING_PORT}`)
})
