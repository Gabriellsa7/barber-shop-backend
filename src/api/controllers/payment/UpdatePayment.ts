import { Request, Response } from "express";
import { PaymentService } from "../../services/PaymentService";
import { PaymentRepository } from "../../repositories/PaymentRepository";

export default {
  async updatePayment(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { value, payment_method, status, user_id, reserve_id } = req.body;

      const update = new PaymentService(new PaymentRepository());

      const payment = await update.updatePayment(id, {
        value,
        payment_method,
        status,
        user_id,
        reserve_id,
      });

      return res.status(200).send(payment);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },
};
