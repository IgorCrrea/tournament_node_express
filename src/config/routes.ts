import { Router } from "express";
import { playerController, homeController } from "./components_provider";

export const route = Router()

//Home Controller
route.get("/home", homeController.getIndex.bind(homeController))
route.post("/home/:id", homeController.postIndex.bind(homeController))


//Player Controller
route.get("/player", playerController.listAll.bind(playerController))
route.post("/player", playerController.create.bind(playerController))
route.put("/player", playerController.update.bind(playerController))
route.delete("/player", playerController.delete.bind(playerController))
// route.delete("/player", (req, res) => playerController.delete(req, res))