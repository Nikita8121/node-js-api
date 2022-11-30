import { Request, Response, NextFunction } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { IMiddleWare } from './middleware.interface';
import { verify } from 'jsonwebtoken';

interface JWTData {
	email: string;
}

export class AuthMiddleware implements IMiddleWare {
	constructor(private secret: string) {}
	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.headers.authorization) {
			verify(req.headers.authorization.split(' ')[1], this.secret, (err, payload) => {
				if (err) {
					next();
				} else if (payload) {
					req.user = (payload as JWTData).email;
					next();
				}
			});
		} else {
			next();
		}
	}
}
