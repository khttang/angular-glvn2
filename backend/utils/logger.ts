import * as winston from 'winston';
import {Request, Response} from 'express';

export const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      level: 'error',
      filename : '../logs/glvn.log',
      handleExceptions: true,
      maxsize: 5242880,
      maxFiles: 10
    }),
    new winston.transports.Console({
      level: 'error',
      handleExceptions: true
    })
  ],
  exitOnError: false
});

export const skip = (req: Request, res: Response): boolean => {
  return res.statusCode >= 200;
};

export const stream = {
  write: (message: string, encoding: string): void => {
    logger.info(message);
  }
};
