import { Router } from "express";
import { getArmChairs } from "../controllers/armchairs/getArmChairs";

const ArmChairRouter = Router();

ArmChairRouter.route("/").get(getArmChairs);

export default ArmChairRouter;
