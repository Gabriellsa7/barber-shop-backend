import {
  BarberService,
  BarberShop,
  HairCutReservation,
  User,
} from "@prisma/client";
import { ReservationStatus } from "../enums/ReservationStatus";

export interface IHairCutReservationRepository {
  createReservation(data: {
    barberShop_id: string;
    service_id: string;
    date_time: Date;
    status: ReservationStatus;
    user_id: string;
    image_url?: string; // optional, if not always necessary
  }): Promise<HairCutReservation>;

  updateReservation(
    id: string,
    data: {
      barberShop_id: string;
      service_id: string;
      date_time?: Date;
      status?: ReservationStatus;
      user_id?: string;
      image_url?: string;
    }
  ): Promise<HairCutReservation>;

  getReservation(id: string): Promise<HairCutReservation | null>;

  getAllReservation(id: string): Promise<HairCutReservation[]>;

  deleteReservation(id: string): Promise<HairCutReservation>;

  // New method to get a barbershop by ID, used in a validation
  getBarberShopId(barberShop_id: string): Promise<any | null>;
  // New method to get a barberService by ID, used in a validation
  getBarberServiceId(service_id: string): Promise<any | null>;
  // New method to get a user by ID, used in a validation
  getUserId(user_id: string): Promise<any | null>;
}
