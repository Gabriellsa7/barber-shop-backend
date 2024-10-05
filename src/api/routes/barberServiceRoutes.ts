import { Router } from "express";
import CreateBarberService from "../controllers/barberservice/CreateBarberService";
import GetAllBarberService from "../controllers/barberservice/GetAllBarberService";

const routes = Router();

routes.post("/barberservice", CreateBarberService.createBarberService);
routes.get("/barberservice", GetAllBarberService.getAllBarberService);

export default routes;
