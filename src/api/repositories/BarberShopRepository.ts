import { PrismaClient } from "@prisma/client";
import { IBarberShopRepository } from "../interfaces/IBarberShopRepository";

// Create an instance of PrismaClient
const prisma = new PrismaClient();

export class BarberShopRepository implements IBarberShopRepository {
  async createBarberShop(data: {
    name: string;
    address: string;
    description: string;
  }): Promise<any> {
    return await prisma.barberShop.create({ data });
  }

  async getBarberShop(id: string): Promise<any> {
    return prisma.barberShop.findUnique({ where: { id } });
  }

  async getAllBarberShop(): Promise<any> {
    return await prisma.barberShop.findMany();
  }

  async updateBarberShop(
    id: string,
    data: { name?: string; address?: string; description?: string }
  ): Promise<any> {
    return await prisma.barberShop.update({
      where: { id },
      data,
    });
  }

  async deleteBarberShop(id: string): Promise<any> {
    return await prisma.barberShop.delete({ where: { id } });
  }
}
