import { Request, Response } from "express";
import { BarberServiceService } from "../../services/BarberServiceService";
import { BarberServiceRepository } from "../../repositories/BarberServiceRepository";

export default {
  async createBarberService(req: Request, res: Response) {
    try {
      const { name, description, price, duration, barberShop_id } = req.body;

      const createBarberService = new BarberServiceService(
        new BarberServiceRepository()
      );

      const createdBarberService =
        await createBarberService.createBarberService({
          name,
          description,
          price,
          duration,
          barberShop_id,
        });

      return res.status(200).send(createdBarberService);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
