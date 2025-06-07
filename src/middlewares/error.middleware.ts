//our custom error handling middleware (containing the signature as -> (err,req,res,next)) by overriding/extending the default error handling middleware of express

import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/errors/app.error";

//destructuring the statusCode and message in the below error handling middleware which catches the thrown error from any of our route-middleware path.

export const genericErrorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}