//Fichier qui contiendra des "Things", en utilisant le modèle de données correspondant.
import Thing from "../models/Thing.js"

const thingController = {
  // GET (all)
  getThings: async (req, res) => {
    const things = await Thing.find()
    res.status(200).json(things)
  },
  // GET (by id)
  getOneThing: async (req, res) => {
    const thing = await Thing.findById(req.params.id)

    res.status(200).json(thing)
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

    try {
      await thing.save()
      return res.status(201).json({ message: "Objet enregistré !" })
    } catch (error) {
      return res.status(400).json({ error: error })
    }
  },
  // PUT (by id)
  updateThing: async (req, res) => {
    const thing = getOneThing()

    try {
      await thing.save()

      return res.status(201).json({ message: "Objet modifié !" })
    } catch (error) {
      return res.status(400).json({ error: error })
    }
  },
}
export default thingController
