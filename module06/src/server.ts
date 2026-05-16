import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import { routeHandler } from "./routes/route";
import config1 from "./config";


const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
    routeHandler(req, res);
    }
);

server.listen(config1.port ,  ()=> {
    console.log(`The server is running on the port ${config1.port}`);
});