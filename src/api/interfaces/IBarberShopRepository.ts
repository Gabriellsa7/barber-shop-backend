import { BarberShop } from "@prisma/client";

export interface IBarberShopRepository {
  createBarberShop(data: {
    name: string;
    address: string;
    description: string;
    rating: number | null;
    opening_hours: string | null;
    img_url: string | null;
  }): Promise<BarberShop | null>;

  getAllBarberShop(): Promise<BarberShop[] | null>;

  getBarberShop(id: string): Promise<BarberShop | null>;

  updateBarberShop(
    id: string,
    data: {
      name?: string;
      address?: string;
      description?: string;
      rating?: number | null;
      opening_hours?: string | null;
      img_url?: string | null;
    }
  ): Promise<BarberShop | null>;

  deleteBarberShop(id: string): Promise<any>;
}
