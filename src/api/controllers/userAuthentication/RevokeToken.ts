import { Request, Response } from "express";
import { ClientAuthenticationService } from "../../services/ClientAuthenticationService";
import { ClientAuthenticationRepository } from "../../repositories/ClientAuthenticationRepository";

export default {
  async revokeToken(req: Request, res: Response) {
    const { token } = req.params;
    const authService = new ClientAuthenticationService(
      new ClientAuthenticationRepository()
    );
    try {
      await authService.revokeToken(token);
      return res.status(200).json({ message: "Token revoked" });
    } catch (error) {
      return res.status(500).json({ message: "Error revoking token", error });
    }
  },
};
