import { Request, Response } from "express";
import { HairCutReservationService } from "../../services/HairCutReservationService";
import { HairCutReservationRepository } from "../../repositories/HairCutReservationRepository";

export default {
  async deleteHairCutReservation(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const deleteReservation = new HairCutReservationService(
        new HairCutReservationRepository()
      );

      const reservation = await deleteReservation.deleteReservation(id);

      return res.status(200).send(reservation);
    } catch (error) {
      console.log(error);

      return res.status(500).send({
        message: "Reservation doesn't exist",
      });
    }
  },
};
