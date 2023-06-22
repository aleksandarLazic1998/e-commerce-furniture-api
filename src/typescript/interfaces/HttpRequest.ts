import * as core from "express-serve-static-core";

export interface IHttpRequest {
	path: string;
	method: string;
	pathParams: core.ParamsDictionary;
	queryParams: core.Query;
	body: unknown;
}
