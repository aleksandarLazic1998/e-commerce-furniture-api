import makeDb from "../../config/connectToDB";
import makeArmChairDBRequests from "./makeArmChairDBRequests";
import makeArmChairRequestHandler from "./makeArmChairRequestHandler";

const database = makeDb();

const armchairRequestList = makeArmChairDBRequests({ database });

const handleArmChairRequest = makeArmChairRequestHandler({
	armchairRequestList,
});

export default handleArmChairRequest;
