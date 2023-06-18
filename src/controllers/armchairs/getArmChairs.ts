import { Request, Response } from "express";
import ArmChairModel from "../../models/armhChair";

export const getArmChairs = async (req: Request, res: Response) => {
	const { perPage = 10, page = 0, sortDirection = "asc" } = req.body;

	const armchairsList = await ArmChairModel.find({})
		.limit(perPage)
		.skip(perPage * page)
		.sort({ firstname: sortDirection });

	res.status(200).json({ data: armchairsList });
};
