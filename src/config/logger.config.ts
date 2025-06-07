import winston from "winston"
import { getCorrelationId } from "../helpers/request.helpers"

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({format: "MM-DD-YYYY HH:mm:ss"}),
        winston.format.json(),
        winston.format.printf(({level, message, timestamp, ...data}) => {
            const output = {level, message, timestamp, correlationId:getCorrelationId(), data}
            // console.log("output", output)
            return JSON.stringify(output)
        })
    ),
    transports: [
        new winston.transports.Console()
    ]
})

export default logger