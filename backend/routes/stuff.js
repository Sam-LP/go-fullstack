import express from "express"
const router = express.Router()

import thingController from "../controllers/stuff.js"

router.get("/", thingController.getThings)
router.get("/:id", thingController.getOneThing)
router.post("/", thingController.createThing)
router.put("/:id", thingController.updateThing)
router.delete("/:id", thingController.deleteThing)

export default router
