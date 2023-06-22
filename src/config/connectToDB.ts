import mongoose from "mongoose";
import { ENV_CONST } from "../constants/env";

export const connectToDB = async () => {
	try {
		await mongoose.connect(ENV_CONST.MONGO_DB_URI);
		console.log("Connected To DB");
	} catch (error) {
		process.exit(1);
		console.log("Connection to Data Base failed.");
	}
};

const makeDb = async () => {
	try {
		const db = await mongoose.connect(ENV_CONST.MONGO_DB_URI);
		console.log("Connected to Data Base.");

		return db;
	} catch (error) {
		console.error(error, "Connection to Data Base failed.");
	}
};

export default makeDb;
