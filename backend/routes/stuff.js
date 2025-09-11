import express from "express"
const router = express.Router()

import thingController from '../controllers/stuff.js'

router.post("/", thingController.createThing)

export default router