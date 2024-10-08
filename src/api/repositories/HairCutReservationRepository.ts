import {
  BarberService,
  BarberShop,
  HairCutReservation,
  PrismaClient,
  User,
} from "@prisma/client";
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
  }): Promise<HairCutReservation> {
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
  ): Promise<HairCutReservation> {
    return await prisma.hairCutReservation.update({ where: { id }, data });
  }

  async getAllReservation(): Promise<HairCutReservation[]> {
    return await prisma.hairCutReservation.findMany();
  }

  async getReservation(id: string): Promise<HairCutReservation | null> {
    return await prisma.hairCutReservation.findUnique({ where: { id } });
  }

  async deleteReservation(id: string): Promise<HairCutReservation> {
    return await prisma.hairCutReservation.delete({ where: { id } });
  }

  // Refatorado para buscar os serviços diretamente da tabela de serviços
  async getBarberServiceId(service_id: string): Promise<BarberService | null> {
    return await prisma.barberService.findUnique({
      where: { id: service_id },
    });
  }

  // Refatorado para buscar a barbearia diretamente da tabela de barbearias
  async getBarberShopId(barberShop_id: string): Promise<BarberShop | null> {
    return await prisma.barberShop.findUnique({
      where: { id: barberShop_id },
    });
  }

  // Refatorado para buscar o usuário diretamente da tabela de usuários
  async getUserId(user_id: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { id: user_id },
    });
  }
}
