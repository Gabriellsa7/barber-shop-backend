import { Request, Response } from "express";
import { PaymentService } from "../../services/PaymentService";
import { PaymentRepository } from "../../repositories/PaymentRepository";

export default {
  async getPaymentById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const getPayment = new PaymentService(new PaymentRepository());

      const payment = await getPayment.getPayment(id);

      return res.status(200).send(payment);
    } catch (error) {
      console.log(error);

      return res.status(200).send({
        message: "Payment not found",
      });
    }
  },
};
