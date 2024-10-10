import { Request, Response } from "express";
import { PaymentService } from "../../services/PaymentService";
import { PaymentRepository } from "../../repositories/PaymentRepository";

export default {
  async deletePayment(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const deletedPayment = new PaymentService(new PaymentRepository());

      const payment = await deletedPayment.deletePayment(id);

      res.status(200).send(payment);
    } catch (error) {
      console.log(error);

      res.status(500).send({
        message: "doesn't exist any Payment",
      });
    }
  },
};
