
import * as express from 'express'
import * as http from 'http'
import * as cors from 'cors'
import * as dotenv from 'dotenv'
import * as winston from 'winston'
import * as morgan from 'morgan'
import { json, urlencoded } from 'body-parser'
import {Express, Request, Response} from 'express'
import * as routes from './routes/_index'

dotenv.config();

if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
  throw new Error('Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file');
}

class Server {
  private app: Express;

  constructor() {

    this.app = express();
    // Express middleware
    this.app.use(cors({
      optionsSuccessStatus: 200
    }));
    this.app.use(urlencoded({
      extended: true
    }));
    this.app.use(json());
    this.app.use(morgan('combined'));
    this.app.listen(process.env.SERVER_PORT, () => {
      winston.log('info', `--> Server successfully started at port ${process.env.SERVER_PORT}`)
    });
    routes.initRoutes(this.app);

    // this._app.use(bodyParser.json());
    // this._app.use(cookieParser());
    // this._app.use(express.static(path.join(__dirname, "./public")));
  }
  getApp() {
    return this.app
  }
}
new Server();
