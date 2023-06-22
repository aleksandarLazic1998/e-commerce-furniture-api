import { Router } from "express";
import armChairController from "../controllers/armchairs/armChairController";

const ArmChairRouter = Router();
console.log(1234);

ArmChairRouter.route("/").get(armChairController);

export default ArmChairRouter;
