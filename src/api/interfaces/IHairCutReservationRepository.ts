import { ReservationStatus } from "../enums/ReservationStatus";

export interface IHairCutReservationRepository {
  createReservation(data: {
    barberShop_id: string;
    service_id: string;
    date: Date;
    status: ReservationStatus;
    client_id: string;
    image_url?: string; // optional, if not always necessary
  }): Promise<any>;

  updateReservation(
    id: string,
    data: {
      barberShop_id: string;
      service_id: string;
      date?: Date;
      status?: ReservationStatus;
      client_id?: string;
      image_url?: string;
    }
  ): Promise<any>;

  getReservation(id: string): Promise<any>;

  getAllReservation(id: string): Promise<any>;

  deleteReservation(id: string): Promise<any>;

  // New method to get a barbershop by ID, used in a validation
  getBarberShopId(barberShop_id: string): Promise<any | null>;
  // New method to get a barberService by ID, used in a validation
  getBarberServiceId(service_id: string): Promise<any | null>;
  getClientId(client_id: string): Promise<any | null>;
}
