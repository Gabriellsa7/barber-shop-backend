import { Request, Response } from "express";
import { HairCutReservationService } from "../../services/HairCutReservationService";
import { HairCutReservationRepository } from "../../repositories/HairCutReservationRepository";

export default {
  async createHairCutReservation(req: Request, res: Response) {
    try {
      const { barberShop_id, service_id, date_time, status, user_id, img_url } =
        req.body;

      if (!barberShop_id || !service_id || !date_time || !status || !user_id) {
        return res.status(400).send({ message: "Missing required fields" });
      }

      const createReservation = new HairCutReservationService(
        new HairCutReservationRepository()
      );

      const reservation = await createReservation.createReservation(
        barberShop_id,
        service_id,
        date_time,
        status,
        user_id,
        img_url
      );

      return res.status(200).send(reservation);
    } catch (error) {
      console.error(error); // Logar o erro para depuração

      return res.status(500).send({
        message: "It was not possible to create the hair cut reservation",
      });
    }
  },
};
