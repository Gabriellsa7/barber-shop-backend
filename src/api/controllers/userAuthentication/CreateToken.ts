import { Request, Response } from "express";
import { ClientAuthenticationService } from "../../services/ClientAuthenticationService";
import { ClientAuthenticationRepository } from "../../repositories/ClientAuthenticationRepository";

export default {
  async createToken(req: Request, res: Response) {
    const { user_id } = req.body;
    const authService = new ClientAuthenticationService(
      new ClientAuthenticationRepository()
    );
    try {
      const token = await authService.createToken(user_id);
      return res.status(201).json({ token });
    } catch (error) {
      return res.status(500).json({ message: "Error creating token", error });
    }
  },
};
