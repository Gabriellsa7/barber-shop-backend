import { Request, Response } from "express";
import { HairCutService } from "../../services/HairCutService";
import { HairCutRepository } from "../../repositories/HairCutRepository";

export default {
  async deleteHairCut(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const deletedHairCut = new HairCutService(new HairCutRepository());

      const hairCut = await deletedHairCut.deleteHairCut(id);

      return res.status(200).send(hairCut);
    } catch (error: any) {
      return res.status(500).send({ message: "HairCut doesn't exist" });
    }
  },
};
