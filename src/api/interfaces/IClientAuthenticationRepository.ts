import { ClientAuthentication } from "@prisma/client";

export interface IClientAuthenticationRepository {
  generateToken(user_id: string): Promise<string>;
  saveToken(user_id: string, token: string): Promise<ClientAuthentication>;
  validateToken(token: string): Promise<boolean>;
  getTokenByUserId(user_id: string): Promise<ClientAuthentication | null>;
  revokeToken(token: string): Promise<void>;
  updateToken(user_id: string, newToken: string): Promise<ClientAuthentication>;
}
