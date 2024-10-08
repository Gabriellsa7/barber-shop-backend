import { BarberService, BarberShop, HairCut } from "@prisma/client";

export interface IHairCutRepository {
  createHairCut(data: {
    name: string;
    description: string;
    img_url: string;
    barberShop_id: string;
    service_id: string;
  }): Promise<HairCut>;

  getHairCut(id: string): Promise<HairCut | null>;

  getAllHairCut(): Promise<HairCut[]>;

  updateHairCut(
    id: string,
    data: {
      name?: string;
      description?: string;
      img_url?: string;
      barberShopId?: string;
      serviceId?: string;
    }
  ): Promise<any>;

  deleteHairCut(id: string): Promise<HairCut>;

  // New method to get a barbershop by ID, used in a validation
  getBarberShop(barberShop_id: string): Promise<BarberShop | null>;
  // New method to get a barberService by ID, used in a validation
  getBarberService(service_id: string): Promise<BarberService | null>;
}
