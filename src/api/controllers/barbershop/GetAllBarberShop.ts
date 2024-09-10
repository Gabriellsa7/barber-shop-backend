import { Request, Response } from "express";
import { BarberShopService } from "../../services/BarberShopService";
import { BarberShopRepository } from "../../repositories/BarberShopRepository";

export default {
  async getAllBarberShop(req: Request, res: Response) {
    try {
      const getAllBarberShop = new BarberShopService(
        new BarberShopRepository()
      );

      const barberShop = await getAllBarberShop.getAllBarberShop();

      return res.status(200).send(barberShop);
    } catch (error) {
      return res
        .status(400)
        .send({ message: "It was not possible to get all barberShop" });
    }
  },
};
