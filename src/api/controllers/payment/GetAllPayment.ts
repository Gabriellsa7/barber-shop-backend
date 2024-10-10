import { Request, Response } from "express";
import { PaymentService } from "../../services/PaymentService";
import { PaymentRepository } from "../../repositories/PaymentRepository";

export default {
  async getAllPayment(req: Request, res: Response) {
    try {
      const allPayments = new PaymentService(new PaymentRepository());

      const payments = await allPayments.getAllPayments();

      return res.status(200).send(payments);
    } catch (error) {
      console.log(error);

      return res.status(500).send({
        message: "It was not possible to get all payments",
      });
    }
  },
};
