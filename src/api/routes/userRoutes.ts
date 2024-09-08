import { Router } from "express";

// Import the UserController, which contains the logic for handling user-related HTTP requests
import UserCreate from "../controllers/user/CreateUser";
import GetUsers from "../controllers/user/GetUsers";
import GetUser from "../controllers/user/GetUser";

// Create a new instance of the Router object
const routes = Router();

// Define a route for handling POST requests to "/users"
// When a POST request is made to this endpoint, the createUser method from UserController will be invoked
routes.post("/users", UserCreate.createUser);

// Define a route for handling GET requests to "/users"
// When a GET request is made to this endpoint, the getUsers method from UserController will be invoked
routes.get("/users", GetUsers.getUsers);

// Define a route for handling GET requests to "/users"
// When a GET request is made to this endpoint, the getUserById method from UserController will be invoked
routes.get("/users/:id", GetUser.getUsersById);

export default routes;
