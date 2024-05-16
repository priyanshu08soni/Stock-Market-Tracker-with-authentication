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

## Server-side usage(PORT: 8000)

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

### After creating heroku

if using webpack:
remember to update the file of [client/webpack.prod.js](https://github.com/amazingandyyy/mern/blob/master/client/webpack.prod.js)
```javascript
 'API_URI': JSON.stringify('https://your-super-amazing-heroku-app.herokuapp.com')
```
if using parcel
remember to update the file of [client/.env.production](https://github.com/amazingandyyy/mern/blob/master/client/.env.production.js)
```
 REACT_APP_API_URI=https://your-super-amazing-heroku-app.herokuapp.com
```
# Dependencies(tech-stacks)
Client-side | Server-side
--- | ---
axios: ^0.15.3 | bcrypt-nodejs: ^0.0.3
babel-preset-stage-1: ^6.1.18|body-parser: ^1.15.2
lodash: ^3.10.1 | cors: ^2.8.1
react: ^16.2.0 | dotenv: ^2.0.0
react-dom: ^16.2.0 | express: ^4.14.0
react-redux: ^4.0.0 | jwt-simple: ^0.5.1
react-router-dom: ^4.2.2 | mongoose: ^4.7.4
redux: ^3.7.2 | morgan: ^1.7.0
redux-thunk: ^2.1.0 |

# Screenshots of this project

User visit public and Home page
![User visit public and Home page](http://i.imgur.com/ORCGHHY.png)

User can sign in or sign up
![User can sign in or sign up](http://i.imgur.com/rrmbU5I.png)

After signing in user can go to account route and make request to token-protected API endpoint
![After signing in user can go to account route](http://i.imgur.com/FzLB51u.png)

## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## BUGs or comments

[Create new Issues](https://github.com/amazingandyyy/mern/issues) (preferred)

Email Me: amazingandyyy@gmail.com (welcome, say hi)

## Author
[Amazingandyyy](https://amazingandyyy.com)

I recently launch my monthly mentorship program, feel free to reach out and see what we can grow together:

<a href="https://mentorcruise.com/mentor/andychen/"> <img src="https://cdn.mentorcruise.com/img/banner/fire-sm.svg" width="240" alt="MentorCruise"> </a>

## Join the growing community

[![Star History Chart](https://api.star-history.com/svg?repos=amazingandyyy/mern&type=Date)](https://star-history.com/#amazingandyyy/mern&Date)


### License
[MIT](https://github.com/amazingandyyy/mern/blob/master/LICENSE)
=======
#Stock Market Tracker with MERN Stack

##This is a full-stack application built using the MERN stack (MongoDB, Express.js, React, and Node.js) to track stock market data and visualize it for informed investment decisions.

>>>>>>> f4bc35c394384ec060561821e68fd44f14ba444b
