// Things ccontroller : chef d'orchestre,
// entre le modèle (/models/Thing.js) et la vue (Angular)
import Thing from "../models/Thing.js"

export class ThingsController {
  // GET (all)
  async getThings(req, res) {
    await Thing.find()
      .then((things) => res.status(200).json(things))
      .catch((error) => res.status(400).json("Erreur : " + error))
  }

  // GET (un seul objet) par /stuff/:id dans la route
  async getOneThing(req, res) {
    await Thing.findById(req.params.id)
      .then((thing) => res.status(200).json(thing))
      .catch((error) => res.status(400).json("Erreur : " + error))
  }

  // CREATION (POST) : tous les champs sont dans le body
  async createThing(req, res) {
    // Récupération des valeurs dans le request.body
    const { title, content, comment } = req.body

    if (!title || !content || !comment) {
      return res.status(400).json({
        success: false,
        message: "Tous les champs obligatoires doivent être remplis",
      })
    }

    const thing = new Thing({
      title,
      content,
      comment,
    })

    await thing
      .save()
      .then((newDocument) => res.status(201).json(newDocument))
      .catch((error) => res.status(400).json("Error: " + error))
  }

  // MODIFICATION (PUT) par /stuff/:id dans la route
  async updateThing(req, res) {
    // Récupération de l'id et des variables dans le body
    let id = req.params.id
    let { title, content, comment } = req.body

    // Mise à jour de l'objet avec gestion réponse (succès ou erreur)
    Thing.findOneAndUpdate(
      { _id: id },
      {
        title: title,
        content: content,
        comment: comment,
      },
      { new: true },
    )
      .then((updatedThing) => res.json(updatedThing))
      .catch((err) => res.status(400).json("Error : " + err))
  }

  // SUPPRESSION (DELETE) par /stuff/:id dans la route
  async deleteThing(req, res) {
    // Récupération id
    const { id } = req.params

    // Suppression object
    await Thing.deleteOne({ _id: id })
      .then((deleteResult) => res.status(200).json(deleteResult))
      .catch((error) => res.status(400).json("Error : " + error))
  }
}
