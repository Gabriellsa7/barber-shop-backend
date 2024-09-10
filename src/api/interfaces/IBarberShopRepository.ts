export interface IBarberShopRepository {
  createBarberShop(data: {
    name: string;
    address: string;
    description: string;
  }): Promise<any>;

  getAllBarberShop(): Promise<any>;

  getBarberShop(id: string): Promise<any>;

  updateBarberShop(
    id: string,
    data: {
      name?: string;
      address?: string;
      description?: string;
    }
  ): Promise<any>;

  deleteBarberShop(id: string): Promise<any>;
}
