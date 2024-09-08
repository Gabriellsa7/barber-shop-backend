// Define an interface named IUserRepository
export interface IUserRepository {
  // Method to create a new user
  // Takes an object with 'name', 'email', and 'password' as parameters
  // Returns a Promise that resolves to any type (usually an object representing the created user)
  createUser(data: {
    name: string; // The name of the user to be created
    email: string; // The email of the user to be created, should be unique
    password: string; // The password of the user to be created
  }): Promise<any>;
  // Method to retrieve a list of users
  // Returns a Promise that resolves to an array of any type (usually an array of user objects)
  getUsers(): Promise<any[]>;
}
