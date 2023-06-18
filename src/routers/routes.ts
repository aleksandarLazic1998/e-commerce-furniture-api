const BASIC_API_ROUTE = "/api";

const ROUTES = {
	AUTH: {
		URL: `${BASIC_API_ROUTE}/auth`,
		LOGIN: "/login",
		REGISTER: "/register",
		LOGOUT: "/logout",
	},
	REFRESH_TOKEN: {
		URL: `${BASIC_API_ROUTE}/refresh-token`,
	},
	EMPLOYEES: {
		URL: `${BASIC_API_ROUTE}/employees`,
	},
	ARMCHAIRS: {
		URL: `${BASIC_API_ROUTE}/arm-chairs`,
	},
};

export default ROUTES;
