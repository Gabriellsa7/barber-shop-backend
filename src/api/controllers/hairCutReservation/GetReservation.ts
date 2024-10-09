import { Request, Response } from "express";
import { HairCutReservationService } from "../../services/HairCutReservationService";
import { HairCutReservationRepository } from "../../repositories/HairCutReservationRepository";

export default {
  async getReservationById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const getReservation = new HairCutReservationService(
        new HairCutReservationRepository()
      );

      const reservation = await getReservation.getReservation(id);

      return res.status(200).send(reservation);
    } catch (error) {
      console.log(error);

      return res.status(200).send({
        message: "Reservation not found",
      });
    }
  },
};
