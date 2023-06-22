import { Request } from "express";
import { IHttpRequest } from "../typescript/interfaces/HttpRequest";

const adaptRequest = (req: Request): Readonly<IHttpRequest> => {
	return Object.freeze({
		path: req.path,
		method: req.method,
		pathParams: req.params,
		queryParams: req.query,
		body: req.body,
	});
};

export default adaptRequest;
