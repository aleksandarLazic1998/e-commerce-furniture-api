import { Request, Response } from "express";
import { IHttpRequest } from "../../typescript/interfaces/HttpRequest";
import makeHttpError from "../../helpers/makeHttpError";
import IHttpResponse from "../../typescript/interfaces/HttpResponse";

interface IProps {
	armchairRequestList: Readonly<{
		getArmChairsDB: () => (
			req: Request,
			res: Response
		) => Promise<Response<any, Record<string, any>>>;
	}>;
}

const makeArmChairRequestHandler = ({ armchairRequestList }: IProps) => {
	const { getArmChairsDB } = armchairRequestList;

	return async function handle(httpRequest: Readonly<IHttpRequest>) {
		const requestMethods: { [key: string]: () => IHttpResponse } = {
			GET: () => getArmChairs(httpRequest),
		};

		return (
			requestMethods[httpRequest.method]() ||
			makeHttpError({
				statusCode: 405,
				errorMessage: `${httpRequest.method} method not allowed.`,
			})
		);
	};

	function getArmChairs(httpRequest: Readonly<IHttpRequest>): IHttpResponse {
		console.log(httpRequest);

		console.log(getArmChairsDB());

		return {
			headers: { "Content-Type": "application/json" },
			statusCode: 200,
			data: JSON.stringify("Radi"),
		};
	}
};

export default makeArmChairRequestHandler;
