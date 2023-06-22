import { config } from "dotenv";
config();

import { createServer } from "http";
import app from "./app";

const server = createServer(app);

server.listen(3006, () => console.log(`Listening on port: ${3006}`));
