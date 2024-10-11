import { Router } from "express";
import CreateToken from "../controllers/userAuthentication/CreateToken";
import ValidateToken from "../controllers/userAuthentication/ValidateToken";
import RevokeToken from "../controllers/userAuthentication/RevokeToken";
import GetTokenById from "../controllers/userAuthentication/GetTokenById";

const router = Router();

router.post("/create-token", CreateToken.createToken);
router.post("/validate-token", ValidateToken.validateToken);
router.get("/get-token/:id", GetTokenById.getToken);
router.delete("/revoke-token/:id", RevokeToken.revokeToken);

export default router;
