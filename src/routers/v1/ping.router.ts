import express from "express"
// import { Request, Response, NextFunction } from "express"
import { pingHandler } from "../../controllers/ping.controller"
import { validateRequestBody } from "../../validators"
import { pingSchema } from "../../validators/ping.validator"

const pingRouter = express.Router()

//Manual validation middleware
// function checkBody(req: Request, res: Response, next: NextFunction) : void {
//     if(typeof req.body.name !== "string"){
//         res.status(400).send("Name is not is correct fromat.")
//     }
//     next()
// }

pingRouter.get('/', validateRequestBody(pingSchema), pingHandler)
pingRouter.get('/users/:id/comments', pingHandler) // url = api/v1/users/{id - 1,2,3 etc}/comments -> id the url paramss
pingRouter.get('/health', (req,res) => {
    res.status(200).send("OK")
})


export default pingRouter