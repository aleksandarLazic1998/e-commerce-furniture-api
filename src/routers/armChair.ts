import { Router } from "express";
import armChairController from "../controllers/armchairs/armChairController";

const ArmChairRouter = Router();

ArmChairRouter.route("/").get(armChairController);

export default ArmChairRouter;
