import { Router } from "express";
import CreateHairCut from "../controllers/haircut/CreateHairCut";
import UpdateHairCut from "../controllers/haircut/UpdateHairCut";
import GetAllHairCut from "../controllers/haircut/GetAllHairCut";

const routes = Router();

routes.post("/haircut", CreateHairCut.createHairCut);
routes.put("/haircut/:id", UpdateHairCut.updateHairCut);
routes.get("/haircut", GetAllHairCut.getAllHairCut);

export default routes;
