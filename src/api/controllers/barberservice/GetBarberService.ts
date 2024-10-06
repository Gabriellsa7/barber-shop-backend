import { Request, Response } from "express";
import { BarberServiceRepository } from "../../repositories/BarberServiceRepository";
import { BarberServiceService } from "../../services/BarberServiceService";

export default {
  async getBarberService(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const getBarberService = new BarberServiceService(
        new BarberServiceRepository()
      );

      const barberService = await getBarberService.getBarberServiceId(id);

      return res.status(200).send(barberService);
    } catch (error: any) {
      return res.status(500).send({ message: "BarberService doesn't exist" });
    }
  },
};
