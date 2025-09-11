//Fichier qui contiendra des "Things", en utilisant le modèle de données correspondant.
import Thing from "../models/Thing.js"

const thingController = {
    createThing : (req, res) => {

        delete req.body._id; // pour retirer le champ "id" de la requête.

        // Nouvel objet
        const thing = new Thing({
            // correspond aux éléments qui vont être crées en base.
            title: req.body.title,
            article: req.body.article,
            comment: req.body.comment,
        })

        thing.save()
              .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(
        error => {
          res.status(400).json({ error: error})
        }
    )
}

}
export default thingController