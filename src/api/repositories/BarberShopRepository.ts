import { BarberShop, PrismaClient } from "@prisma/client";
import { IBarberShopRepository } from "../interfaces/IBarberShopRepository";

// Create an instance of PrismaClient
const prisma = new PrismaClient();

export class BarberShopRepository implements IBarberShopRepository {
  async createBarberShop(data: {
    name: string;
    address: string;
    description: string;
    rating: number | null;
    opening_hours: string | null;
    img_url: string | null;
  }): Promise<BarberShop> {
    return await prisma.barberShop.create({ data });
  }

  async getBarberShop(id: string): Promise<BarberShop | null> {
    return prisma.barberShop.findUnique({ where: { id } });
  }

  async getAllBarberShop(): Promise<BarberShop[]> {
    return await prisma.barberShop.findMany();
  }

  async updateBarberShop(
    id: string,
    data: {
      name?: string;
      address?: string;
      description?: string;
      rating?: number | null;
      opening_hours?: string | null;
      img_url?: string | null;
    }
  ): Promise<BarberShop | null> {
    return await prisma.barberShop.update({
      where: { id },
      data,
    });
  }

  async deleteBarberShop(id: string): Promise<BarberShop | null> {
    return await prisma.barberShop.delete({ where: { id } });
  }
}
