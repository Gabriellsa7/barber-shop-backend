import { PrismaClient } from "@prisma/client";
import { IHairCutReservationRepository } from "../interfaces/IHairCutReservationRepository";
import { ReservationStatus } from "../enums/ReservationStatus";

const prisma = new PrismaClient();

export class HairCutReservationRepository
  implements IHairCutReservationRepository
{
  async createReservation(data: {
    barberShop_id: string;
    service_id: string;
    date_time: Date;
    status: ReservationStatus;
    user_id: string;
    img_url?: string;
  }): Promise<any> {
    return await prisma.hairCutReservation.create({ data });
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
  ): Promise<any> {
    return await prisma.hairCutReservation.update({ where: { id }, data });
  }

  async getAllReservation(): Promise<any> {
    return await prisma.hairCutReservation.findMany();
  }

  async getReservation(id: string): Promise<any> {
    return await prisma.hairCutReservation.findUnique({ where: { id } });
  }

  async deleteReservation(id: string): Promise<any> {
    return await prisma.hairCutReservation.delete({ where: { id } });
  }

  async getBarberServiceId(service_id: string): Promise<any | null> {
    return await prisma.hairCutReservation.findUnique({
      where: { id: service_id },
    });
  }

  async getBarberShopId(barberShop_id: string): Promise<any | null> {
    return await prisma.hairCutReservation.findUnique({
      where: { id: barberShop_id },
    });
  }

  async getUserId(user_id: string): Promise<any | null> {
    return await prisma.hairCutReservation.findUnique({
      where: { id: user_id },
    });
  }
}
