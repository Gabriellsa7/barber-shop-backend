import { PrismaClient } from "@prisma/client";
import { IHairCutRepository } from "../interfaces/IHairCutRepository";

// Create an instance of PrismaClient
const prisma = new PrismaClient();

export class HairCutRepository implements IHairCutRepository {
  async createHairCut(data: {
    name: string;
    description: string;
    img_url: string;
    barberShop_id: string;
    service_id: string;
  }): Promise<any> {
    return await prisma.hairCut.create({ data });
  }

  async getHairCut(id: string): Promise<any> {
    return await prisma.hairCut.findUnique({ where: { id } });
  }

  async getAllHairCut(): Promise<any> {
    return await prisma.hairCut.findMany();
  }

  async updateHairCut(
    id: string,
    data: {
      name?: string;
      description?: string;
      img_url?: string;
      barberShopId?: string;
      serviceId?: string;
    }
  ): Promise<any> {
    return await prisma.hairCut.update({ where: { id }, data });
  }
  async deleteHairCut(id: string): Promise<any> {
    return await prisma.hairCut.delete({ where: { id } });
  }

  // Implementation of getBarberShop
  async getBarberShop(barberShop_id: string): Promise<any | null> {
    return await prisma.barberShop.findUnique({
      where: { id: barberShop_id },
    });
  }

  // Implementation of getBarberShop
  async getBarberService(service_id: string): Promise<any | null> {
    return await prisma.barberService.findUnique({
      where: { id: service_id },
    });
  }
}
