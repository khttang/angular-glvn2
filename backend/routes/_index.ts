import * as winston from 'winston'
import { Express, Request, Response } from 'express'
import * as jwt from 'express-jwt'
import * as jwksRsa from 'jwks-rsa'
import * as jwtAuthz from 'express-jwt-authz'
// import * as LanguagesRoutes from './languages'
// import * as AppUserRoutes from './appusers'

export function initRoutes(app: Express) {
  winston.log('info', '--> Initialize routes');

  app.get('/api', (req: Request, res: Response) => res.status(200).send({
    message: 'server is running!'
  }));

  // LanguagesRoutes.routes(app)
  // AppUserRoutes.routes(app)

  // app.all('*', (req: Request, res: Response) => res.boom.notFound())

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

  app.use((error: Error, req: Request, res: Response, next: Function) => {
    if (error) {
      res.status(400).send(error);
    }
  });
  app.get('/api/public', (req, res) => {
    res.json({ message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.' });
  });

  app.get('/api/private', checkJwt, checkScopes, (req, res) => {
    res.json({ message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.' });
  });

  app.post('/api/admin', checkJwt, checkScopesAdmin, (req, res) => {
    res.json({ message: 'Hello from an admin endpoint! You need to be authenticated and have a scope of write:messages to see this.' });
  });


}
