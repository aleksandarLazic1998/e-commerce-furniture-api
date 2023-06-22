import { Request, Response } from "express";
import ArmChairModel from "../../models/armhChair";

interface IProps {
	database: Promise<typeof import("mongoose") | undefined>;
}

const makeArmChairDBRequests = ({ database }: IProps) => {
	const getArmChairsDB = () => async (req: Request, res: Response) => {
		const { perPage = 10, page = 0, sortDirection = "asc" } = req.body;

		try {
			const db = await database;

			const armchairsList = await db
				?.model("ArmChair")
				.find({})
				.limit(perPage)
				.skip(perPage * page)
				.sort({ title: sortDirection });
			return res.status(200).json({ data: armchairsList, error: false });
		} catch (error) {
			return res.status(400).json({ data: null, error: true });
		}
	};

	return Object.freeze({
		getArmChairsDB,
	});
};

export default makeArmChairDBRequests;
