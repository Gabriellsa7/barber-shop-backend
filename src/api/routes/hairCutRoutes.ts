import { Router } from "express";
import CreateHairCut from "../controllers/haircut/CreateHairCut";

const routes = Router();

routes.post("/haircut", CreateHairCut.createHairCut);

export default routes;
