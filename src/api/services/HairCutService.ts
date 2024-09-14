import { HairCutRepository } from "../repositories/HairCutRepository";

// The HairCutService class handles business logic for haircuts.
// It interacts with the HairCutRepository to perform database operations.
export class HairCutService {
  // Constructor that takes an instance of HairCutRepository as a dependency
  constructor(private hairCutRepository: HairCutRepository) {}

  // Method to create a new haircut.
  // It receives the haircut details (name, description, img_url, barberShop_id, service_id).
  public async createHairCut(
    name: string,
    description: string,
    img_url: string,
    barberShop_id: string,
    service_id: string
  ) {
    // Business logic: check if the barberShop_id is valid
    const barberShopExists = await this.hairCutRepository.getBarberShop(
      barberShop_id
    );

    if (!barberShopExists) {
      throw new Error("Invalid barbershop ID");
    }

    // Calls the repository's createHairCut method, passing the necessary data.
    // This method adds any business logic before calling the repository.
    const hairCut = await this.hairCutRepository.createHairCut({
      name,
      description,
      img_url,
      barberShop_id,
      service_id,
    });

    // Returns the newly created haircut from the repository.
    return hairCut;
  }

  // Method to get a specific haircut by its ID.
  public async getHairCut(id: string) {
    // Calls the repository to fetch a haircut by its unique ID.
    const hairCut = await this.hairCutRepository.getHairCut(id);
    if (!hairCut) {
      throw new Error("Haircut not found");
    }
    return hairCut;
  }

  // Method to retrieve all haircuts.
  public async getAllHairCut() {
    return await this.hairCutRepository.getAllHairCut();
  }

  // Method to update a haircut's information.
  // It receives the haircut ID and the new data (name, description, etc.).
  public async updateHairCutInfo(
    id: string,
    data: {
      name: string;
      description: string;
      img_url: string;
      barberShop_id: string;
      service_id: string;
    }
  ) {
    const existingHairCut = await this.hairCutRepository.getHairCut(id);

    if (!existingHairCut) {
      throw new Error("Haircut not found");
    }

    return await this.hairCutRepository.updateHairCut(id, data);
  }

  // Method to delete a haircut by its ID.
  public async deleteHairCut(id: string) {
    const hairCut = await this.hairCutRepository.getHairCut(id);

    if (!hairCut) {
      throw new Error("Haircut not found");
    }

    return await this.hairCutRepository.deleteHairCut(id);
  }
}
