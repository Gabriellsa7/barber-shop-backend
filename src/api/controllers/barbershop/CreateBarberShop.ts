import { Request, Response } from "express";
import { BarberShopService } from "../../services/BarberShopService";
import { BarberShopRepository } from "../../repositories/BarberShopRepository";
import { validateBarberShopFields } from "../../utils/barberShopValidation";

export default {
  async createBarberShope(req: Request, res: Response) {
    try {
      const { name, address, description, rating, opening_hours, img_url } =
        req.body;

      const validation = await validateBarberShopFields(
        name,
        address,
        description,
        rating,
        opening_hours
      );
      if (validation && validation.error) {
        return res.json(validation);
      }

      const createBarberShop = new BarberShopService(
        new BarberShopRepository()
      );

      const barberShop = await createBarberShop.createBarberShop(
        name,
        address,
        description,
        rating,
        opening_hours,
        img_url
      );

      return res.status(201).send(barberShop);
    } catch (error) {
      return res.status(400).json({
        message: "It was not possible to create the barberShop",
      });
    }
  },
};
