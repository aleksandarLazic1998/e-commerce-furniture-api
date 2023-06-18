import { CorsOptions } from "cors";

const whiteList = ["http://localhost:3000"];

const corsOptions: CorsOptions = {
	origin: function (origin, callback) {
		if (whiteList.indexOf(origin!) !== -1) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
};
export default corsOptions;
