import { Router } from "express";
import CreateHairCut from "../controllers/haircut/CreateHairCut";
import UpdateHairCut from "../controllers/haircut/UpdateHairCut";
import GetAllHairCut from "../controllers/haircut/GetAllHairCut";
import GetHairCut from "../controllers/haircut/GetHairCut";
import DeleteHairCut from "../controllers/haircut/DeleteHairCut";

const routes = Router();

routes.post("/haircut", CreateHairCut.createHairCut);
routes.put("/haircut/:id", UpdateHairCut.updateHairCut);
routes.get("/haircut", GetAllHairCut.getAllHairCut);
routes.get("/haircut/:id", GetHairCut.getHairCut);
routes.delete("/haircut/:id", DeleteHairCut.deleteHairCut);

export default routes;
