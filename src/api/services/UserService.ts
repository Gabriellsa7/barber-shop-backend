import { UserRepository } from "../repositories/UserRepository";

// The UserService class contains business logic and interacts with the repository
export class UserService {
  // Constructor injects an instance of UserRepository
  constructor(private userRepository: UserRepository) {}

  // Method to create a new user
  public async createUser(name: string, email: string, password: string) {
    // Calls the createUser method on the repository and passes user data
    const user = await this.userRepository.createUser({
      name,
      email,
      password,
    });
    // Returns the created user data
    return user;
  }

  // Method to retrieve a list of users
  public async getUsers() {
    // Calls the getUsers method on the repository to fetch user data
    return await this.userRepository.getUsers();
  }
}
