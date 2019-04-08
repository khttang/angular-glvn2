
const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const cors = require('cors');
require('dotenv').config();

if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
  throw new Error('Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file');
}

app.use(cors());

const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

const checkScopes = jwtAuthz([ 'read:messages' ]);
const checkScopesAdmin = jwtAuthz([ 'write:messages' ]);

app.get('/api/public', (req, res) => {
  res.json({ message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.' });
});

app.get('/api/private', checkJwt, checkScopes, (req, res) => {
  res.json({ message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.' });
});

app.post('/api/admin', checkJwt, checkScopesAdmin, (req, res) => {
  res.json({ message: 'Hello from an admin endpoint! You need to be authenticated and have a scope of write:messages to see this.' });
});

app.listen(process.env.SERVER_PORT);
console.log('Server listening on http://localhost:3001. The Angular app will be built and served at http://localhost:3000.');


/*

https://github.com/tsmean/tsmean/tree/master/backend

// src/index.ts

import * as express from 'express'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import { userRouter } from './routers/user.router'
import { tokenGuard } from './middlewares/token-guard'

const app = express()
const port = 4001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/', userRouter)

// Unprotected Get
app.get('/some-resource', (req, res, next) => {
    res.json('Hello World')
})
app.use(tokenGuard())

// Protected Get
app.get('/some-protected-resource', (req, res, next) => {
    res.json('Protected Hello World')
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})

 */
