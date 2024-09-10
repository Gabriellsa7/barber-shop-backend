import { Request, Response } from "express";
import { BarberShopService } from "../../services/BarberShopService";
import { BarberShopRepository } from "../../repositories/BarberShopRepository";

export default {
  async deleteBarberShop(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const deletedBarberShop = new BarberShopService(
        new BarberShopRepository()
      );

      const barberShop = await deletedBarberShop.deleteBarberShop(id);

      return res.status(200).send(barberShop);
    } catch (error: any) {
      return res.status(500).send({ message: "BarberShop doesn't exist" });
    }
  },
};
