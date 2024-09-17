export interface IHairCutRepository {
  createHairCut(data: {
    name: string;
    description: string;
    img_url: string;
    barberShop_id: string;
    service_id: string;
  }): Promise<any>;

  getHairCut(id: string): Promise<any>;

  getAllHairCut(): Promise<any>;

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

  deleteHairCut(id: string): Promise<any>;

  // New method to get a barbershop by ID
  getBarberShop(barberShop_id: string): Promise<any | null>;
}