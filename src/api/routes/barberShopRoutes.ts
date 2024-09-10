import { Router } from "express";
import CreateBarberShop from "../controllers/barbershop/CreateBarberShop";
import GetAllBarberShop from "../controllers/barbershop/GetAllBarberShop";
import DeleteBarberShop from "../controllers/barbershop/DeleteBarberShop";
import GetBarberShop from "../controllers/barbershop/GetBarberShop";
import UpdateBarberShop from "../controllers/barbershop/UpdateBarberShop";

const routes = Router();

routes.post("/barbershop", CreateBarberShop.createBarberShope);
routes.get("/barbershop", GetAllBarberShop.getAllBarberShop);
routes.get("/barbershop/:id", GetBarberShop.getBarberShop);
routes.put("/barbershop/:id", UpdateBarberShop.updateBarberShop);
routes.delete("/barbershop/:id", DeleteBarberShop.deleteBarberShop);

export default routes;
