import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import ROUTES from "./routers/routes";
import AuthRouter from "./routers/auth";
import corsOptions from "./config/corsOptions";
import { jwtValidator } from "./middlewares/jwtValidator";
import LogoutRouter from "./routers/logout";
import RefreshTokenRouter from "./routers/refreshToken";
import EmployeesRouter from "./routers/employee";
import ArmChairRouter from "./routers/armChair";

const app = express();

app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

/* Public Routes */
app.use(ROUTES.AUTH.URL, AuthRouter);
app.use(ROUTES.REFRESH_TOKEN.URL, RefreshTokenRouter);
app.use(ROUTES.AUTH.URL, LogoutRouter);
app.use(ROUTES.ARMCHAIRS.URL, ArmChairRouter);

/* Private Routes */
app.use(jwtValidator);
app.use(ROUTES.EMPLOYEES.URL, EmployeesRouter);

export default app;
