import express from "express"
const router = express.Router()

import { ThingsController } from "../controllers/stuff.js"
const thingsController = new ThingsController()

router.get("/", thingsController.getThings)
router.get("/:id", thingsController.getOneThing)
router.post("/", thingsController.createThing)
router.put("/:id", thingsController.updateThing)
router.delete("/:id", thingsController.deleteThing)

export default router
