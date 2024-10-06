import { Request, Response } from "express";
import { HairCutService } from "../../services/HairCutService";
import { HairCutRepository } from "../../repositories/HairCutRepository";
import { BarberServiceService } from "../../services/BarberServiceService";
import { BarberServiceRepository } from "../../repositories/BarberServiceRepository";

export default {
  async updateBarberService(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, description, price, duration, barberShop_id } = req.body;

      const updatedBarberService = new BarberServiceService(
        new BarberServiceRepository()
      );

      const updateBarberService =
        await updatedBarberService.updateBarberService(id, {
          name,
          barberShop_id,
          description,
          duration,
          price,
        });

      return res.status(201).send(updateBarberService);
    } catch (error) {
      return res.status(500).send({ message: "BarberService doesn't exist" });
    }
  },
};
