import { Request, Response } from "express";
import { BarberServiceService } from "../../services/BarberServiceService";
import { BarberServiceRepository } from "../../repositories/BarberServiceRepository";
import { HairCutService } from "../../services/HairCutService";
import { HairCutRepository } from "../../repositories/HairCutRepository";

export default {
  async getAllHairCut(req: Request, res: Response) {
    try {
      const getAllHairCut = new HairCutService(new HairCutRepository());

      const hairCut = await getAllHairCut.getAllHairCut();

      return res.status(200).send(hairCut);
    } catch (error) {
      return res
        .status(400)
        .send({ message: "It was not possible to get all barberShop" });
    }
  },
};
