import { Request, Response } from "express";
import { UserService } from "../../services/UserService";
import { UserRepository } from "../../repositories/UserRepository";

export default {
  // Method to retrieve all users.
  // This method is called when a GET request is made to the /users route.
  async getUsers(req: Request, res: Response): Promise<Response> {
    try {
      // Create an instance of UserService, injecting a new instance of UserRepository as a dependency
      const listUser = new UserService(new UserRepository());

      // Calls the getUsers method from UserService to fetch all users from the database.
      const users = await listUser.getUsers();

      // Returns the list of users and sets the response status to 200 (OK).
      return res.status(200).json(users);
    } catch (error: any) {
      // If an error occurs while retrieving users, it sends a 400 (Bad Request) response with the error message.
      return res.status(400).json({ error: error.message });
    }
  },
};
