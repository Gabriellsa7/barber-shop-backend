import { Request, Response } from "express";
import { UserService } from "../../services/UserService";
import { UserRepository } from "../../repositories/UserRepository";
import { prisma } from "../../database";
import { error } from "console";
import { validateUserFields } from "../../utils/userValidation";

// Method to handle the creation of a new user.
// This method is called when a POST request is made to the /users route.
export default {
  async createUser(req: Request, res: Response): Promise<Response> {
    try {
      // Destructures name, email, and password from the request body (sent by the client).
      const { name, email, password } = req.body;

      // Check if a user with the given email already exists in the database
      const userExist = await prisma.user.findUnique({
        where: { email }, // Search the user by the 'email' field
      });

      // If the user already exists, return an error response
      if (userExist) {
        return res.json({
          error: true, // Indicate that there was an error
          message: "Error: user already exist", // Message informing that the user already exists
        });
      }

      // Validate fields using the utility function
      const validation = validateUserFields(name, email, password);
      if (validation.error) {
        return res.json(validation);
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
