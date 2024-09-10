import { prisma } from "../database";

export async function validateUserFields(
  name: string,
  email: string,
  password: string
) {
  // test if the fields are empty
  if (!email || !password || !name) {
    //if the fields is empty return a error
    return {
      error: true,
      message: "Error: You need to fill in all fields",
    };
  } else if (!email.includes("@")) {
    //if email don't had the @ return a error
    return {
      error: true,
      message: "Invalid email format",
    };
  } else if (password.length < 6) {
    //if the password length is not > 6
    return {
      error: true,
      message: "Password must be at least 6 characters long",
    };
  }

  // Check if a user with the given email already exists in the database
  const userExist = await prisma.user.findUnique({
    where: { email }, // Search the user by the 'email' field
  });

  // If the user already exists, return an error response
  if (userExist) {
    return {
      error: true,
      message: "Email Already Exist",
    };
  }
  return { error: false };
}
