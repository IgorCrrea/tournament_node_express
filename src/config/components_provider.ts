import { HomeController } from "../controllers/home_controller";
import { PlayerController } from "../controllers/player_controller";
import { PlayerDao } from "../dao/player_dao";

//DAOs
export const playerDao = new PlayerDao();

//Controllers
export const homeController = new HomeController();
export const playerController = new PlayerController(playerDao);