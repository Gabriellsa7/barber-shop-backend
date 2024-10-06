import { Router } from "express";
import CreateBarberService from "../controllers/barberservice/CreateBarberService";
import GetAllBarberService from "../controllers/barberservice/GetAllBarberService";
import GetBarberService from "../controllers/barberservice/GetBarberService";
import UpdateBarberService from "../controllers/barberservice/UpdateBarberService";
import DeleteBarberService from "../controllers/barberservice/DeleteBarberService";

const routes = Router();

routes.post("/barberservice", CreateBarberService.createBarberService);
routes.get("/barberservice", GetAllBarberService.getAllBarberService);
routes.get("/barberservice/:id", GetBarberService.getBarberService);
routes.put("/barberservice/:id", UpdateBarberService.updateBarberService);
routes.delete("/barberservice/:id", DeleteBarberService.deleteBarberService);

export default routes;
