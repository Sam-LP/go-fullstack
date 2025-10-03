//Fichier qui contiendra des "Things", en utilisant le modèle de données correspondant.
import Thing from "../models/Thing.js"

const thingController = {
  // GET (all)
  getThings: async (req, res) => {
    await Thing.find()
      .then((things) => res.status(200).json(things))
      .catch((error) => res.status(400).json("Erreur : " + error))
    // res.status(200).json(things)
  },
  // GET (by id)
  getOneThing: async (req, res) => {
    await Thing.findById(req.params.id)
      .then((thing) => res.status(200).json(thing))
      .catch((error) => res.status(400).json("Erreur : " + error))

    // res.status(200).json(thing)
  },
  // POST
  createThing: async (req, res) => {
    // Nouvel objet
    const { title, content, comment } = req.body

    if (!title || !content || !comment) {
      return res.status(400).json({
        success: false,
        message: "Tous les champs obligatoires doivent être remplis",
      })
    }

    const thing = new Thing({
      // correspond aux éléments qui vont être crées en base.
      title,
      content,
      comment,
    })

    await thing
      .save()
      .then((newDocument) => res.status(201).json(newDocument))
      .catch((error) => res.status(400).json("Error: " + error))
    // try {
    //   await thing.save()
    //   return res.status(201).json({ message: "Objet enregistré !" })
    // } catch (error) {
    //   return res.status(400).json({ error: error })
    // }
  },
  // PUT (by id)
  updateThing: async (req, res) => {
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
  },
  deleteThing: async (req, res) => {
    // Récupération id
    const { id } = req.params

    // Suppression object
    await Thing.deleteOne({ _id: id })
      .then((deleteResult) => res.status(200).json(deleteResult))
      .catch((error) => res.status(400).json("Error : " + error))

    // try {
    //   return res.status(201).json({ message: "L'objet a bien été supprimé." })
    // } catch (error) {
    //   return res.status(400).json({ error: error })
    // }
  },
}
export default thingController
