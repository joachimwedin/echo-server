import { createServer } from "http";
import type { IncomingMessage, ServerResponse } from "http";

const portParam = process.argv[2];
let port: number = 54800

if (portParam !== undefined) {
    if (!Number.isInteger(Number(portParam))) {
        console.log(`Invalid port ${portParam}`);
        process.exit(0);
    } else {
        port = Number(portParam)
    }
} 

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    const { url, method } = req;
    if (url) {
        const parsedUrl = new URL(url, `http://${req.headers.host}`);
        const requestPath = parsedUrl.pathname;
        const headers = JSON.stringify(req.headers, undefined, 2);

        console.log("");
        console.log("Incoming request:");
        console.log(`Headers: ${headers}`);
        console.log(`Request Method: ${method}`);
        console.log(`Request Path: ${requestPath}`);

        if (parsedUrl.searchParams.size > 0) {
            console.log(`Query Parameters: ${parsedUrl.searchParams}`);
        }

        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            if (body != "") {
                console.log("Body:", body);
            }
            res.end();
        });
    } else {
        console.log("Received a bad request, url is empty");
    }
});

server.listen(port, () => {
    console.log(`Echo Server is running on http://127.0.0.1:${port} 🚀`);
});
