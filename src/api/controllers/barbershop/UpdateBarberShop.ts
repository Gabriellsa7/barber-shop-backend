import { Request, Response } from "express";
import { BarberShopService } from "../../services/BarberShopService";
import { BarberShopRepository } from "../../repositories/BarberShopRepository";

export default {
  async updateBarberShop(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, address, description } = req.body;

      const updateBarberShop = new BarberShopService(
        new BarberShopRepository()
      );

      const barberShop = await updateBarberShop.updateBarberShop(id, {
        name,
        address,
        description,
      });

      return res.status(200).send(barberShop);
    } catch (error) {
      return res.status(500).send({ message: "BarberShop doesn't exist" });
    }
  },
};
