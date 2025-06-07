import express from 'express'
import {serverConfig} from './config'
import v1Router from './routers/v1/index.router'
import v2Router from './routers/v2/index.router'
import { genericErrorHandler } from './middlewares/error.middleware'
import logger from './config/logger.config'
import { attachCorrelationIdMiddleware } from './middlewares/correlation.middleware'
import sequelize from './db/models/sequelize'

const app = express()

app.use(express.json())

app.use(attachCorrelationIdMiddleware)

app.use('/api/v1', v1Router)
app.use('/api/v1', v2Router)


app.use(genericErrorHandler)

app.listen(serverConfig.PORT, async() => {
    logger.info(`Server is running on ${serverConfig.PORT}\n`)
    //syntax -> logger.level("message", {<key>: <Any direct data or variable.>})
    logger.info("Please Press Ctrl + C to stop the Server.", {name: "Some data"})
    try {
        await sequelize.authenticate()
        logger.info("Database connection established successfully.")
    } catch (error) {
        logger.error("Unable to connect to the database:", error)
    }
})

