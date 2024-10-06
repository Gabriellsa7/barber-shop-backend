export interface IBarberService {
  createService(data: {
    name: string;
    description: string;
    price: number;
    duration: number;
    barberShop_id: string;
  }): Promise<any>;

  getService(id: string): Promise<any>;

  getAllServices(): Promise<any>;

  updateService(
    id: string,
    data: {
      name?: string;
      description?: string;
      price?: number;
      duration?: number;
      barberShop_id?: string;
    }
  ): Promise<any>;

  deleteService(id: string): Promise<any>;
}
