import { BarberService, BarberShop, PrismaClient } from "@prisma/client";
import { IBarberService } from "../interfaces/IBarberServiceRepository";

const prisma = new PrismaClient();

export class BarberServiceRepository implements IBarberService {
  async createService(data: {
    name: string;
    description: string;
    price: number;
    duration: number;
    barberShop_id: string;
  }): Promise<BarberService> {
    return await prisma.barberService.create({ data });
  }

  async getService(id: string): Promise<BarberService | null> {
    return await prisma.barberService.findUnique({ where: { id } });
  }

  async getAllServices(): Promise<BarberService[]> {
    return await prisma.barberService.findMany();
  }

  async updateService(
    id: string,
    data: {
      name?: string;
      description?: string;
      price?: number;
      duration?: number;
      barberShop_id: string;
    }
  ): Promise<BarberService> {
    return await prisma.barberService.update({ where: { id }, data });
  }

  async deleteService(id: string): Promise<BarberService> {
    return await prisma.barberService.delete({ where: { id } });
  }

  // Implementation of getBarberShop
  async getBarberShop(barberShop_id: string): Promise<BarberShop | null> {
    return await prisma.barberShop.findUnique({
      where: { id: barberShop_id },
    });
  }
}
