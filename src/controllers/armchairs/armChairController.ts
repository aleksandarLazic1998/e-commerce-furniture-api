import { Request, Response } from "express";
import adaptRequest from "../../helpers/adaptRequest";
import handleArmChairRequest from "./handleArmChairRequest";
import IHttpResponse from "../../typescript/interfaces/HttpResponse";

const armChairController = (req: Request, res: Response) => {
	const httpRequest = adaptRequest(req);

	handleArmChairRequest(httpRequest)
		.then(({ headers, statusCode, data }: IHttpResponse) => {
			res.set(headers).status(statusCode).send(data);
		})
		.catch(() => res.status(500).end());
};

export default armChairController;
