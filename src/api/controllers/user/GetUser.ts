import { Request, Response } from "express";
import { UserService } from "../../services/UserService";
import { UserRepository } from "../../repositories/UserRepository";

export default {
  async getUsersById(req: Request, res: Response): Promise<Response> {
    try {
      // Create an instance of UserService, injecting a new instance of UserRepository as a dependency
      const { id } = req.params;
      const getUser = new UserService(new UserRepository());
      // Calls the getUsers method from UserService to fetch all users from the database.
      const user = await getUser.getUsersById(id);

      // Returns the list of users and sets the response status to 200 (OK).
      if (user) {
        return res.status(200).json(user);
      } else {
        return res.status(404).json({ error: "User not found" });
      }
    } catch (error: any) {
      // If an error occurs while retrieving users, it sends a 400 (Bad Request) response with the error message.
      return res.status(400).json({ error: error.message });
    }
  },
};
