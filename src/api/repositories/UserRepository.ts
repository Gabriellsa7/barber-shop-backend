import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../interfaces/IUserRepository";

// Create an instance of PrismaClient
const prisma = new PrismaClient();

// Define a class that implements the IUserRepository interface
export class UserRepository implements IUserRepository {
  // Method to create a new user
  async createUser(data: {
    name: string;
    email: string;
    password: string;
  }): Promise<any> {
    // Use the PrismaClient instance to create a new user record in the database
    return await prisma.user.create({
      data, // Pass the user data to the Prisma 'create' method
    });
  }

  // Method to get all users
  async getUsers(): Promise<any[]> {
    // Use the PrismaClient instance to retrieve all user records from the database
    return await prisma.user.findMany();
  }

  async getUserById(id: string): Promise<any> {
    return await prisma.user.findUnique({ where: { id } });
  }

  async updateUser(
    id: string,
    data: { name?: string; email?: string; password?: string }
  ): Promise<any> {
    return await prisma.user.update({
      where: { id: String(id) },
      data,
    });
  }

  async deleteUser(id: string) {
    return await prisma.user.delete({ where: { id } });
  }
}
