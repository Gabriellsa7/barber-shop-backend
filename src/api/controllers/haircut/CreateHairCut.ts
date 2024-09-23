import { Request, Response } from "express";
import { HairCutService } from "../../services/HairCutService";
import { HairCutRepository } from "../../repositories/HairCutRepository";

export default {
  async createHairCut(req: Request, res: Response) {
    try {
      const { name, description, img_url, barberShop_id, service_id } =
        req.body;

      const createdHairCut = new HairCutService(new HairCutRepository());

      const hairCut = await createdHairCut.createHairCut(
        name,
        description,
        img_url,
        barberShop_id,
        service_id
      );

      return res.status(200).send(hairCut);
    } catch (error) {
      return res.status(500).send({
        message: "It was not possible to create the HairCut",
      });
    }
  },
};
