import { BarberShopRepository } from "../repositories/BarberShopRepository";

export class BarberShopService {
  constructor(private baberShopRepository: BarberShopRepository) {}

  public async createBarberShop(
    name: string,
    address: string,
    description: string
  ) {
    const barberShop = await this.baberShopRepository.createBarberShop({
      name,
      address,
      description,
    });
    return barberShop;
  }

  public async getBarberShop(id: string) {
    return await this.baberShopRepository.getBarberShop(id);
  }

  public async getAllBarberShop() {
    return await this.baberShopRepository.getAllBarberShop();
  }

  public async updateBarberShop(
    id: string,
    data: { name: string; address: string; description: string }
  ) {
    return await this.baberShopRepository.updateBarberShop(id, data);
  }

  public async deleteBarberShop(id: string) {
    return await this.baberShopRepository.deleteBarberShop(id);
  }
}
