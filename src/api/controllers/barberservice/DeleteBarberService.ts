import { Request, Response } from "express";
import { BarberServiceService } from "../../services/BarberServiceService";
import { BarberServiceRepository } from "../../repositories/BarberServiceRepository";

export default {
  async deleteBarberService(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const deletedBarberService = new BarberServiceService(
        new BarberServiceRepository()
      );

      const barberService = await deletedBarberService.deleteBarberService(id);

      return res.status(200).send(barberService);
    } catch (error: any) {
      return res.status(500).send({ message: "BarberService doesn't exist" });
    }
  },
};
