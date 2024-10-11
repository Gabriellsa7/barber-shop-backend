import { Request, Response } from "express";
import { ClientAuthenticationService } from "../../services/ClientAuthenticationService";
import { ClientAuthenticationRepository } from "../../repositories/ClientAuthenticationRepository";

export default {
  async getToken(req: Request, res: Response) {
    const { user_id } = req.params;

    const takeToken = new ClientAuthenticationService(
      new ClientAuthenticationRepository()
    );

    try {
      // Attempt to get the token by user_id
      const token = await takeToken.getTokenByUserId(user_id);

      // If token is not found, handle the case accordingly
      if (!token) {
        return res.status(404).json({ message: "Token not found" });
      }

      return res.status(200).send(token);
    } catch (error) {
      // Log the error for debugging (optional)
      console.error("Error retrieving token:", error);

      // Return a 500 Internal Server Error response
      return res.status(500).json({ message: "Error getting token", error });
    }
  },
};
