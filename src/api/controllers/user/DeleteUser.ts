import { Request, Response } from "express";
import { UserService } from "../../services/UserService";
import { UserRepository } from "../../repositories/UserRepository";

export default {
  async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      // Create an instance of UserService, injecting a new instance of UserRepository as a dependency
      const { id } = req.params;

      // Calls the deleteUser method from UserService to fetch all users from the database.
      const deleteUser = new UserService(new UserRepository());

      const deletedUser = await deleteUser.deleteUser(id);

      // Returns the deleted user and sets the response status to 200 (OK).
      return res.status(200).json(deletedUser);
    } catch (error: any) {
      // If an error occurs while retrieving users, it sends a 400 (Bad Request) response with the error message.
      return res.status(400).json({ error: error.message });
    }
  },
};
