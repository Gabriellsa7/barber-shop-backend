// Import the PrismaClient class from the Prisma Client library.
import { PrismaClient } from "@prisma/client";

// Create a new instance of the PrismaClient class.
// This instance will be used to interact with the database.
// The PrismaClient provides methods for querying and mutating data in the database.
const prisma = new PrismaClient();

// Export the instance of PrismaClient so that it can be used in other parts of the application.
// By exporting it, other modules can import this instance and use it to perform database operations.
export { prisma };
