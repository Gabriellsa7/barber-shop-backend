import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { UserRepository } from "../repositories/UserRepository";

// Class responsible for handling user-related requests.
class UserController {
  // Method to handle the creation of a new user.
  // This method is called when a POST request is made to the /users route.
  public async createUser(req: Request, res: Response): Promise<Response> {
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
  }

  // Method to retrieve all users.
  // This method is called when a GET request is made to the /users route.
  public async getUsers(req: Request, res: Response): Promise<Response> {
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
  }

  public async getUsersById(req: Request, res: Response): Promise<Response> {
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
  }
}

export default new UserController();
