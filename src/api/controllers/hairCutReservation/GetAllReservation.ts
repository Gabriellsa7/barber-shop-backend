import { Request, Response } from "express";
import { HairCutReservationService } from "../../services/HairCutReservationService";
import { HairCutReservationRepository } from "../../repositories/HairCutReservationRepository";

export default {
  async getAllReservation(req: Request, res: Response) {
    try {
      const getReservation = new HairCutReservationService(
        new HairCutReservationRepository()
      );

      const reservation = await getReservation.getAllReservation();

      return res.status(200).send(reservation);
    } catch (error) {
      console.log(error);

      return res.status(500).send({
        message: "It was not possible to get all reservation",
      });
    }
  },
};
