# Echo Server

Echo Server is a simple TypeScript-based HTTP server that logs incoming request details, including headers, method, path, query parameters, and body content.

## Installation
Ensure you have Node.js installed, then clone the repository and install dependencies:

```sh
npm install
```

## Build
Compile the TypeScript code into JavaScript:

```sh
npm run build
```

## Usage
### Start the Server
Run the server with:

```sh
npm run start
```

By default, the server listens on port `54800`. To specify a custom port:

```sh
npm run start 3000
```

### Example Request
Using `curl`:

```sh
curl -X POST -H "Content-Type: application/json" -d '{"message": "Hello, Echo Server!"}' "http://127.0.0.1:3000/hello?name=world"
```

### Expected Output
On the server logs, you'll see something like:

```
Incoming request:
Headers: {
  "host": "127.0.0.1:54800",
  "user-agent": "curl/8.6.0",
  "accept": "*/*",
  "content-type": "application/json",
  "content-length": "34"
}
Request Method: POST
Request Path: /hello
Query Parameters: name=world
Body: {"message": "Hello, Echo Server!"}
```

## Development
### Clean Build Directory
To remove the `build` directory:

```sh
npm run clean
```

## License
This project is licensed under the MIT License.
