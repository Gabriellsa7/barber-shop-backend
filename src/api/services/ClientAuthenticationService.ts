import { ClientAuthentication, User } from "@prisma/client";
import { ClientAuthenticationRepository } from "../repositories/ClientAuthenticationRepository";
import { prisma } from "../database";

export class ClientAuthenticationService {
  constructor(private authRepository: ClientAuthenticationRepository) {}

  async createToken(user_id: string): Promise<string> {
    const token = await this.authRepository.generateToken(user_id);
    await this.authRepository.saveToken(user_id, token);
    return token;
  }

  async validateToken(token: string): Promise<boolean> {
    const clientAuth = await this.authRepository.validateToken(token);
    return clientAuth !== null; // Retorna true se o token for encontrado, caso contrário, false
  }

  async getTokenByUserId(
    user_id: string
  ): Promise<ClientAuthentication | null> {
    const user = this.authRepository.getTokenByUserId(user_id);
    return user;
  }

  async revokeToken(token: string): Promise<void> {
    await this.authRepository.revokeToken(token);
  }

  async updateToken(
    user_id: string,
    newToken: string
  ): Promise<ClientAuthentication> {
    return this.authRepository.updateToken(user_id, newToken);
  }
}
