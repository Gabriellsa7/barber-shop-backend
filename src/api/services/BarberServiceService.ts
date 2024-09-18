import { BarberServiceRepository } from "../repositories/BarberServiceRepository";

export class BarberServiceService {
  constructor(private baberServiceRepository: BarberServiceRepository) {}

  public createBarberService(data: {
    name: string;
    description: string;
    price: number;
    duration: number;
    barberShop_id: string;
  }) {
    return this.baberServiceRepository.createService(data);
  }

  public getBarberServiceId(id: string) {
    return this.baberServiceRepository.getService(id);
  }

  public getAllBarberServices() {
    return this.baberServiceRepository.getAllServices();
  }

  public updateBarberService(
    id: string,
    data: {
      name?: string;
      description?: string;
      price?: number;
      duration?: number;
    }
  ) {
    return this.baberServiceRepository.updateService(id, data);
  }

  public deleteBarberService(id: string) {
    return this.baberServiceRepository.deleteService(id);
  }
}
