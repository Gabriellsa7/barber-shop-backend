import { Request, Response } from "express";
import { PaymentService } from "../../services/PaymentService";
import { PaymentRepository } from "../../repositories/PaymentRepository";

export default {
  async createPayment(req: Request, res: Response) {
    try {
      const { value, payment_method, status, user_id, reserve_id } = req.body;

      const createdPayment = new PaymentService(new PaymentRepository());

      const payment = await createdPayment.createPayment(
        value,
        payment_method,
        status,
        user_id,
        reserve_id
      );

      return res.status(200).send(payment);
    } catch (error) {
      console.log(error);

      return res.status(500).send({
        message: "It was not possible to create the payment",
      });
    }
  },
};
