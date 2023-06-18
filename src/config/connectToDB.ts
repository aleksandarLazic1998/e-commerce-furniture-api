import { Server } from "http";
import mongoose from "mongoose";
import { ENV_CONST } from "../constants/env";

export const connectToDB = async (server: Server) => {
	try {
		await mongoose.connect(ENV_CONST.MONGO_DB_URI);
		console.log("Connected To DB");

		server.listen(3006, () => console.log(`Listening on port: ${3006}`));
	} catch (error) {
		process.exit(1);
		console.log("Connection to Data Base failed.");
	}
};
