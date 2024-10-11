import { Request, Response } from "express";
import { ClientAuthenticationService } from "../../services/ClientAuthenticationService";
import { ClientAuthenticationRepository } from "../../repositories/ClientAuthenticationRepository";

export default {
  async validateToken(req: Request, res: Response) {
    const { token } = req.body;
    const authService = new ClientAuthenticationService(
      new ClientAuthenticationRepository()
    );
    try {
      const isValid = await authService.validateToken(token);
      return res.status(200).json({ isValid });
    } catch (error) {
      return res.status(500).json({ message: "Error validating token", error });
    }
  },
};
