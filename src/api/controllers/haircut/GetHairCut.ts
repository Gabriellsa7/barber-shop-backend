import { Request, Response } from "express";
import { HairCutRepository } from "../../repositories/HairCutRepository";
import { HairCutService } from "../../services/HairCutService";

export default {
  async getHairCut(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const getHairCut = new HairCutService(new HairCutRepository());

      const hairCut = await getHairCut.getHairCut(id);

      return res.status(200).send(hairCut);
    } catch (error: any) {
      return res.status(500).send({ message: "HairCut doesn't exist" });
    }
  },
};
