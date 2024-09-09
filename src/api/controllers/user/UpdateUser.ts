import { Request, Response } from "express";
import { UserService } from "../../services/UserService";
import { UserRepository } from "../../repositories/UserRepository";

export default {
  async updateUser(req: Request, res: Response): Promise<Response> {
    try {
      // Create an instance of UserService, injecting a new instance of UserRepository as a dependency
      const { id } = req.params;
      const { name, email, password } = req.body;

      // Calls the updateUser method from UserService to fetch all users from the database.
      const updateUserCall = new UserService(new UserRepository());

      const updatedUser = await updateUserCall.updateUser(id, {
        name,
        email,
        password,
      });

      // Returns the updater user and sets the response status to 200 (OK).
      return res.status(200).json(updatedUser);
    } catch (error: any) {
      // If an error occurs while retrieving users, it sends a 400 (Bad Request) response with the error message.
      return res.status(400).json({ error: error.message });
    }
  },
};
