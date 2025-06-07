import dotenv from "dotenv"

type ServerConfig = {
    PORT: number
}

type DBConfig = {
    DB_HOST: string,
    DB_USER: string,
    DB_PASSWORD: string,
    DB_NAME: string
}

function loadEnv(){
    dotenv.config() //config function in dotnet package enables us to load all env vars from .env file so that we cann access them using process global object
    console.log("Env vars loaded")
}

loadEnv() //calling the function here itself to load all env vars before executing the server.ts file

export const serverConfig: ServerConfig = {
    PORT: Number(process.env.PORT)
}

export const dbConfig: DBConfig = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'root',
    DB_NAME: process.env.DB_NAME || 'test_db'
}