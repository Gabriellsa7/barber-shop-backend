import { prisma } from "../database";
import { ReservationStatus } from "../enums/ReservationStatus";
import { HairCutReservationRepository } from "../repositories/HairCutReservationRepository";

export class HairCutReservationService {
  constructor(
    private hairCutReservationRepository: HairCutReservationRepository
  ) {}

  async createReservation(
    barberShop_id: string,
    service_id: string,
    date_time: Date,
    status: ReservationStatus,
    user_id: string,
    img_url?: string
  ) {
    // Validação dos IDs através do repositório
    const barberShop = await this.hairCutReservationRepository.getBarberShopId(
      barberShop_id
    );
    const service = await this.hairCutReservationRepository.getBarberServiceId(
      service_id
    );
    const user = await this.hairCutReservationRepository.getUserId(user_id);

    if (!barberShop || !service || !user) {
      throw new Error("Invalid barberShop_id, service_id, or user_id");
    }

    const hairCutReservation =
      await this.hairCutReservationRepository.createReservation({
        barberShop_id,
        service_id,
        date_time,
        status,
        user_id,
        img_url,
      });

    return hairCutReservation;
  }

  async updateReservation(
    id: string,
    data: {
      barberShop_id?: string;
      service_id?: string;
      date_time?: Date;
      status?: ReservationStatus;
      user_id?: string;
      img_url?: string;
    }
  ) {
    return await this.hairCutReservationRepository.updateReservation(id, data);
  }

  async getAllReservation() {
    return await this.hairCutReservationRepository.getAllReservation();
  }

  async getReservation(id: string) {
    return await this.hairCutReservationRepository.getReservation(id);
  }

  async deleteReservation(id: string) {
    return await this.hairCutReservationRepository.deleteReservation(id);
  }

  async getBarberServiceId(service_id: string) {
    return await this.hairCutReservationRepository.getBarberServiceId(
      service_id
    );
  }

  async getBarberShopId(barberShop_id: string): Promise<any | null> {
    return await this.hairCutReservationRepository.getBarberShopId(
      barberShop_id
    );
  }

  async getUserId(user_id: string): Promise<any | null> {
    return await this.hairCutReservationRepository.getUserId(user_id);
  }
}
