import { Request, Response } from "express";
import { HairCutService } from "../../services/HairCutService";
import { HairCutRepository } from "../../repositories/HairCutRepository";

export default {
  async updateHairCut(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, description, img_url, barberShop_id, service_id } =
        req.body;

      const updatedHairCut = new HairCutService(new HairCutRepository());

      const updateHairCut = await updatedHairCut.updateHairCutInfo(id, {
        name,
        barberShop_id,
        description,
        img_url,
        service_id,
      });

      return res.status(201).send(updateHairCut);
    } catch (error) {
      return res.status(500).send({ message: "HairCut doesn't exist" });
    }
  },
};
