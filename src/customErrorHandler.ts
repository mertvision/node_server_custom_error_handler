// Importing third-party modules
import {Request, Response, NextFunction} from 'express';
// Importing custom modules
import CustomError from './CustomError';

// Definition of the customErrorHandler middleware function
const customErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    // Define a customError and assign it the value of err
    let customError = err;

    // Handle specific error types
    if (err.name === "SyntaxError") {
        customError = new CustomError("Unexpected Syntax", 400);
    } else if (err.name === "ValidationError") {
        customError = new CustomError(err.message, 400);
    } else if (err.code === 11000) {
        customError = new CustomError("Duplicate Key Found: Check Your Input", 400);
    };

    // Handle generic errors
    return res.status(customError.status || 500).json({
        success: false,
        message: customError.message
    });
};

// Export the customErrorHandler class as the default export
export default customErrorHandler;
