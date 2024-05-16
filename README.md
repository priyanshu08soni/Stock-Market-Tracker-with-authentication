<<<<<<< HEAD
<h1 align="center">
🌐 Stock Market Tracker (MERN stack) 
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>

## clone or download
```terminal
$ git clone https://github.com/priyanshu08soni/Stock-Market-Tracker-with-authentication.git
$ npm i
```

## project structure
```terminal
LICENSE
package.json
backend/
   package.json
   .env (to create .env, check [prepare your secret session])
frontend/
   package.json
...
```

# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/)
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd stock-market-tracker-frontend      // go to client folder
$ npm i    // npm install packages
$ npm start // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
```

## Server-side usage(PORT: 5000)

### Prepare your secret

run the script at the first level:

(You need to add a JWT_SECRET, MONGODB_URL , PORT in .env to connect to MongoDB)

```
// in the root level
$ cd stock-market-tracker-backend
```

### Start

```terminal
$ cd stock-market-tracker-backend  // go to server folder
$ npm i       // npm install packages
$ npm run server // run it locally
$ npm run build // this will build the server code to es5 js codes and generate a dist file
```

# Dependencies(tech-stacks)
Client-side | Server-side
--- | ---
  @heroicons/react: ^1.0.6 | bcrypt: ^5.1.1
  @reduxjs/toolkit: ^1.9.7 | body-parser: ^1.20.2
  @testing-library/jest-dom: ^5.17.0 | bootstrap-daterangepicker: ^3.1.0
  @testing-library/react: ^13.4.0 | cloudinary: ^1.41.0
  @testing-library/user-event: ^13.5.0 | cookie-parser:^1.4.6
  axios: ^1.6.7, | cors: ^2.8.5
  bootstrap: ^5.3.2 | dotenv: ^16.3.1
  crypto: ^1.0.1 | express: ^4.18.2
  dotenv: ^16.4.5 | express-async-handler:^1.2.0
  formik: ^2.4.5 | jsonwebtoken: ^9.0.2
  https-browserify: ^1.0.0 | mongodb: ^6.6.1
  node-polyfill-webpack-plugin: ^3.0.0 | mongoose: ^7.4.3
  react: ^18.3.1 | morgan: ^1.10.0
  react-bootstrap-typeahead: ^6.3.2 | multer: ^1.4.5-lts.1
  react-dom: ^18.3.1 | nodemailer: ^6.9.5
  react-router-dom: ^6.18.0 | razorpay: ^2.9.2
  react-helmet: ^6.1.0 | sharp: ^0.32.6
  react-icons: ^4.12.0 | slugify: ^1.6.6
  react-redux: ^8.1.3 | uniqid: ^5.4.0
  react-scripts: 5.0.1 | ---
  react-toastify: ^10.0.4 | ---
  recharts: ^2.12.7 | ---
  request: ^2.88.2 | ---
  util: ^0.12.5 | ---
  web-vitals: ^2.1.4 | ---
  webpack-dev-middleware: ^7.2.1 | ---
  yup: ^1.3.3 | ---
   
# Screenshots of this project

User visit public , Home page , SignUp Page, Login Page
- [User visit public and Home page](https://imgur.com/a/website-r90AEM8)

## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
