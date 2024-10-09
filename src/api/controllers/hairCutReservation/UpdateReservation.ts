import { Request, Response } from "express";
import { HairCutReservationService } from "../../services/HairCutReservationService";
import { HairCutReservationRepository } from "../../repositories/HairCutReservationRepository";

export default {
  async updateReservation(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { barberShop_id, service_id, date_time, status, user_id, img_url } =
        req.body;

      const update = new HairCutReservationService(
        new HairCutReservationRepository()
      );

      const reservationUpdated = await update.updateReservation(id, {
        barberShop_id,
        service_id,
        date_time,
        status,
        user_id,
        img_url,
      });

      return res.status(200).send(reservationUpdated);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
