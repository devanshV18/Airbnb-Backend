import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";
import logger from "../config/logger.config";

export function validateRequestBody(schema: AnyZodObject) {
    return async(req: Request, res:Response, next:NextFunction) => {
        try{
            logger.info("validating request body")
            await schema.parseAsync(req.body) //waiting till we get a success or failed validation response.
            logger.info("Validation Successfull")
            next()
        }   
        catch(error){
            res.status(400).json({
                success: false,
                message: "Invalid Request Body",
                error: error
            })
        }
    }
}

export function validateQueryParams(schema: AnyZodObject) {
    return async(req: Request, res:Response, next:NextFunction) => {
        try{
            await schema.parseAsync(req.query) //waiting till we get a success or failed validation response.
            console.log("Query Params is Appropriate.")
            next()
        }   
        catch(error){
            res.status(400).json({
                success: false,
                message: "Invalid Query Params",
                error: error
            })
        }
    }
}