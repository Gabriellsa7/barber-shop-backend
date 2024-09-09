export function validateUserFields(
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
  return { error: false };
}
