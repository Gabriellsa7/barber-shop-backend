import { Request, Response } from "express";
import { BarberServiceService } from "../../services/BarberServiceService";
import { BarberServiceRepository } from "../../repositories/BarberServiceRepository";

export default {
  async getAllBarberService(req: Request, res: Response) {
    try {
      const getAllBarberService = new BarberServiceService(
        new BarberServiceRepository()
      );

      const barberService = await getAllBarberService.getAllBarberServices();

      return res.status(200).send(barberService);
    } catch (error) {
      return res
        .status(400)
        .send({ message: "It was not possible to get all barberService" });
    }
  },
};
