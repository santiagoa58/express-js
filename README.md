# Learning Express.js

This repository contains simple Express.js applications.

In express101, there are two servers, one is a simple server that uses pure Node.js and the second one is a simple server that uses Express.js.

In express201, there is a simple server that uses Express.js and has middleware, routing, and templating.

## Express101

Express101 is a simple Express.js application. it shows how to implement a simple server in pure Node.js and then how to implement the same server using Express.js.

### Installation

1. Clone the repository: `git clone https://github.com/santiagoa58/express-js.git`
2. Navigate to the project directory: `cd express101`
3. Install dependencies: `npm install`

### Usage

To start the server, run: `node expressServer.js`.
Or, to start the server that only uses node without express.js, run: `node nodeServer.js`.

You can access the application at `http://localhost:3000`.

## Express201

Express201 is a simple Express.js application. It shows how to utilize express js further with middleware, routing, and templating.

### Installation

1. Clone the repository: `git clone https://github.com/santiagoa58/express-js.git`
2. Navigate to the project directory: `cd express201`
3. Install dependencies: `npm install`

### Usage

To start the server, run: `node rendering.js`.

You can access the application at `http://localhost:3000`.

## Express301

Express 301 holds a simple web application built using the Express framework in Node.js. It sets up routes for a login page, a welcome page, and a logout function. It also uses the EJS templating engine to render views. The application uses cookie-parser to handle cookies and helmet to add some basic security measures. When a user logs in, their username is stored in a cookie and displayed on the welcome page.

### Installation

1. Clone the repository: `git clone https://github.com/santiagoa58/express-js.git`
2. Navigate to the project directory: `cd express301`
3. Install dependencies: `npm install`

### Usage

To start the server, run: `node loginSite.js`.

You can access the application at `http://localhost:3000`.
