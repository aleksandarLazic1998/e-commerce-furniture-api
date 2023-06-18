import { Schema, model } from "mongoose";

const ArmChairSchema = new Schema(
	{
		image: { type: String, default: "" },
		title: { type: String, required: true },
		description: { type: String, default: "" },
		techInfo: { type: [String], default: [] },
		price: { type: Number, default: 0 },
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const ArmChairModel = model("ArmChair", ArmChairSchema);
export default ArmChairModel;
