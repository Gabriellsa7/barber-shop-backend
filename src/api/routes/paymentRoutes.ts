import { Router } from "express";
import CreatePayment from "../controllers/payment/CreatePayment";
import DeletePayment from "../controllers/payment/DeletePayment";
import GetAllPayment from "../controllers/payment/GetAllPayment";
import GetPayment from "../controllers/payment/GetPayment";
import UpdatePayment from "../controllers/payment/UpdatePayment";

const routes = Router();

routes.post("/payment", CreatePayment.createPayment);
routes.get("/payment", GetAllPayment.getAllPayment);
routes.get("/payment/:id", GetPayment.getPaymentById);
routes.put("/payment/:id", UpdatePayment.updatePayment);
routes.delete("/payment/:id", DeletePayment.deletePayment);

export default routes;
