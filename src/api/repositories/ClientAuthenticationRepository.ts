import { PrismaClient, ClientAuthentication, User } from "@prisma/client";
import { IClientAuthenticationRepository } from "../interfaces/IClientAuthenticationRepository";
import crypto from "crypto";

const prisma = new PrismaClient();

export class ClientAuthenticationRepository
  implements IClientAuthenticationRepository
{
  async generateToken(user_id: string): Promise<string> {
    return crypto.randomBytes(32).toString("hex");
  }

  async saveToken(
    user_id: string,
    token: string
  ): Promise<ClientAuthentication> {
    return prisma.clientAuthentication.create({
      data: {
        user_id,
        token,
      },
    });
  }

  async validateToken(token: string): Promise<boolean> {
    const auth = await prisma.clientAuthentication.findFirst({
      where: { token }, // Use findFirst aqui
    });
    return !!auth;
  }

  // async validateToken(user_id: string): Promise<boolean> {
  //     const auth = await prisma.clientAuthentication.findUnique({
  //         where: { user_id }, // Acesse o ClientAuthentication pelo user_id
  //     });
  //     return !!auth;
  // }

  async getTokenByUserId(
    user_id: string
  ): Promise<ClientAuthentication | null> {
    const authentication = await prisma.clientAuthentication.findUnique({
      where: {
        user_id: user_id, // Use user_id to find the authentication
      },
    });
    return authentication; // This will return the ClientAuthentication object or null
  }

  async revokeToken(token: string): Promise<void> {
    const auth = await prisma.clientAuthentication.findFirst({
      where: { token },
    });

    if (!auth) {
      throw new Error("Token not found");
    }

    await prisma.clientAuthentication.delete({
      where: { id: auth.id }, // Use o id para deletar
    });
  }

  async updateToken(
    user_id: string,
    newToken: string
  ): Promise<ClientAuthentication> {
    return prisma.clientAuthentication.update({
      where: { id: user_id },
      data: { token: newToken },
    });
  }
}
