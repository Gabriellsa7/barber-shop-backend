import { BarberService } from "@prisma/client";

export interface IBarberService {
  createService(data: {
    name: string;
    description: string;
    price: number;
    duration: number;
    barberShop_id: string;
  }): Promise<BarberService>;

  getService(id: string): Promise<BarberService | null>;

  getAllServices(): Promise<BarberService[]>;

  updateService(
    id: string,
    data: {
      name?: string;
      description?: string;
      price?: number;
      duration?: number;
      barberShop_id?: string;
    }
  ): Promise<BarberService>;

  deleteService(id: string): Promise<BarberService>;
}
