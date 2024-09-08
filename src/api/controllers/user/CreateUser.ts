import { Request, Response } from "express";
import { UserService } from "../../services/UserService";
import { UserRepository } from "../../repositories/UserRepository";

// Method to handle the creation of a new user.
// This method is called when a POST request is made to the /users route.
export default {
  async createUser(req: Request, res: Response): Promise<Response> {
    try {
      // Destructures name, email, and password from the request body (sent by the client).
      const { name, email, password } = req.body;

      if (!email || !password || !name) {
        return res.json({
          error: true,
          message: "Error: You need to fill in all fields",
        });
      }
      // Create an instance of UserService, injecting a new instance of UserRepository as a dependency
      const createUsers = new UserService(new UserRepository());

      // Calls the createUser method from UserService, passing the data.
      const user = await createUsers.createUser(name, email, password);

      // Returns the newly created user and sets the response status to 201 (Created).
      return res.status(201).json(user);
    } catch (error: any) {
      // If an error occurs during user creation, it sends a 400 (Bad Request) response with the error message.
      return res.status(400).json({ error: error.message });
    }
  },
};
