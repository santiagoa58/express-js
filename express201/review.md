# Networking: HTTP and TCP/UDP

**TCP** (Transmission Control Protocol) and **UDP** (User Datagram Protocol) are two of the most common protocols used for transmitting data over the Internet. They are both part of the **IP** (Internet Protocol) suite, which is a set of protocols that define how data is transmitted over the Internet.

**HTTP (Hypertext Transfer Protocol)** is a protocol used for transmitting hypermedia documents, such as HTML. It is the foundation of data communication on the World Wide Web.

- **Stateless**: Each HTTP request is independent; the server does not retain session information about clients. This means the server does not remember past requests, making it easier to scale but sometimes necessitating additional strategies for maintaining state, such as cookies.
- **Connectionless**: The client, after making a request, disconnects from the server and waits for a response. The server processes the request and re-establishes the connection to send the response.
- **Flexible**: HTTP allows different types of data to be transmitted, facilitating diverse applications like web browsing, file transfer, and API usage.

## HTTP Message Structure

An HTTP message, either a request sent by the client or a response from the server, follows a specific structure:

1. **Start Line**
   - Request Example: `GET /blog HTTP/1.1`
   - Response Example: `HTTP/1.1 200 OK`
   - Includes the HTTP version.
2. **Headers**
   - Comprised of key-value pairs that provide additional information about the request or response.
   - Common headers include:
     - `Content-Type`: Specifies the media type of the resource (e.g., `text/html`, `application/json`).
     - `Content-Length`: The length of the request or response body in octets (8-bit bytes).
     - `Cookie`: Used to send cookies from the client to the server.
     - `Authorization`: Contains credentials for authenticating the client with the server.
     - `User-Agent`: Provides information about the client software.
     - `Host`: Specifies the domain name of the server.
     - `Accept`: Indicates the media types acceptable for the response.
     - Others: `Accept-Language`, `Accept-Encoding`, `Connection`, `Cache-Control`, `Pragma`, `Expires`, `If-Modified-Since`, `If-None-Match`, `Location`, `Set-Cookie`, `X-Powered-By`, `Date`.
3. **Message Body**
   - Optional and used to send additional data like form submission data or API request payloads.

## HTTP Methods

HTTP methods, also known as request methods, define the action to be performed on a given resource identified by a URL. The most common methods are:

- **GET**

  - Usage: Requests data from a specified resource.
  - Commonly used to retrieve data from a server.

- **POST**

  - Usage: Submits data to be processed to a specified resource.
  - Often used for submitting form data or uploading files.

- **PUT**

  - Usage: Updates a specified resource completely with the data provided.
  - Commonly used for updating existing resources.

- **DELETE**

  - Usage: Deletes the specified resource.
  - Used for removing resources from a server.

- **HEAD**

  - Usage: Similar to GET, but it requests only the headers of a resource.
  - Useful for checking what a GET request will return before actually making a GET request.

- **OPTIONS**

  - Usage: Describes the communication options for the target resource.
  - Often used in CORS (Cross-Origin Resource Sharing) preflight requests.

- **PATCH**

  - Usage: Applies partial modifications to a resource.
  - Used for making partial updates to a resource.

- **CONNECT**

  - Usage: Establishes a tunnel to the server identified by the target resource.
  - Used in more specialized cases, like web proxy functionality.

- **TRACE**
  - Usage: Performs a message loop-back test along the path to the target resource.
  - Used mainly for diagnostic purposes.

## HTTP Status Codes

These codes indicate the status of an HTTP request:

- **1xx (Informational)**: The request was received, continuing process.
- **2xx (Success)**: The request was successfully received, understood, and accepted.
- **3xx (Redirection)**: Further action needs to be taken to complete the request.
- **4xx (Client Error)**: The request contains bad syntax or cannot be fulfilled.
- **5xx (Server Error)**: The server failed to fulfill a valid request.
