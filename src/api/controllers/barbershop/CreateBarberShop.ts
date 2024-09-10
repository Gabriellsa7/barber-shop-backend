import { Request, Response } from "express";
import { prisma } from "../../database";
import { BarberShopService } from "../../services/BarberShopService";
import { BarberShopRepository } from "../../repositories/BarberShopRepository";
import { error } from "console";
import { validateBarberShopFields } from "../../utils/BarberShopValidation";

export default {
  async createBarberShope(req: Request, res: Response) {
    try {
      const { name, address, description } = req.body;

      const validation = await validateBarberShopFields(
        name,
        address,
        description
      );
      if (validation && validation.error) {
        return res.json(validation);
      }

      const createBarberShop = new BarberShopService(
        new BarberShopRepository()
      );

      const barberShope = await createBarberShop.createBarberShop(
        name,
        address,
        description
      );

      return res.status(201).send(barberShope);
    } catch (error) {
      return res.status(400).json({
        message: "It was not possible to create the barberShop",
      });
    }
  },
};
