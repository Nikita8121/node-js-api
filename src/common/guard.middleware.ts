import { Request, Response, NextFunction } from 'express';
import { HTTPError } from '../errors/http-error.class';

import { IMiddleWare } from './middleware.interface';

export class guardMiddleware implements IMiddleWare {
	execute(req: Request, res: Response, next: NextFunction): void {
		if (!req.user) {
			return next(new HTTPError(401, 'jwt wrong'));
		}
		next();
	}
}
