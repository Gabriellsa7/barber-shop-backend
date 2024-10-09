import { Router } from "express";
import CreateHairCutReservation from "../controllers/hairCutReservation/CreateHairCutReservation";
import DeleteHairCutReservation from "../controllers/hairCutReservation/DeleteHairCutReservation";
import GetAllReservation from "../controllers/hairCutReservation/GetAllReservation";
import GetReservation from "../controllers/hairCutReservation/GetReservation";
import UpdateReservation from "../controllers/hairCutReservation/UpdateReservation";

const routes = Router();

routes.post("/reservation", CreateHairCutReservation.createHairCutReservation);
routes.put("/reservation/:id", UpdateReservation.updateReservation);
routes.get("/reservation", GetAllReservation.getAllReservation);
routes.get("/reservation/:id", GetReservation.getReservationById);
routes.delete(
  "/reservation/:id",
  DeleteHairCutReservation.deleteHairCutReservation
);

export default routes;
