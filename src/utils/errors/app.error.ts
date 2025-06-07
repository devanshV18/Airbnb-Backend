export interface AppError extends Error {
    statusCode: number;
}

// 1. Internal Server Error
export class InternalServerError implements AppError {
    statusCode: number;
    message: string;
    name: string;

    constructor(message: string = "Internal Server Error") {
        this.statusCode = 500;
        this.message = message;
        this.name = "InternalServerError";
    }
}

// 2. Bad Request Error
export class BadRequestError implements AppError {
    statusCode: number;
    message: string;
    name: string;

    constructor(message: string = "Bad Request") {
        this.statusCode = 400;
        this.message = message;
        this.name = "BadRequestError";
    }
}

// 3. Unauthorized Error
export class UnauthorizedError implements AppError {
    statusCode: number;
    message: string;
    name: string;

    constructor(message: string = "Unauthorized") {
        this.statusCode = 401;
        this.message = message;
        this.name = "UnauthorizedError";
    }
}

// 4. Forbidden Error
export class ForbiddenError implements AppError {
    statusCode: number;
    message: string;
    name: string;

    constructor(message: string = "Forbidden") {
        this.statusCode = 403;
        this.message = message;
        this.name = "ForbiddenError";
    }
}

// 5. Not Found Error
export class NotFoundError implements AppError {
    statusCode: number;
    message: string;
    name: string;

    constructor(message: string = "Not Found") {
        this.statusCode = 404;
        this.message = message;
        this.name = "NotFoundError";
    }
}

// 6. Conflict Error
export class ConflictError implements AppError {
    statusCode: number;
    message: string;
    name: string;

    constructor(message: string = "Conflict") {
        this.statusCode = 409;
        this.message = message;
        this.name = "ConflictError";
    }
}

// 7. Service Unavailable Error
export class ServiceUnavailableError implements AppError {
    statusCode: number;
    message: string;
    name: string;

    constructor(message: string = "Service Unavailable") {
        this.statusCode = 503;
        this.message = message;
        this.name = "ServiceUnavailableError";
    }
}
