"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing custom modules
const CustomError_1 = __importDefault(require("./CustomError"));
// Definition of the customErrorHandler middleware function
const customErrorHandler = (err, req, res, next) => {
    // Define a customError and assign it the value of err
    let customError = err;
    // Handle specific error types
    if (err.name === "SyntaxError") {
        customError = new CustomError_1.default("Unexpected Syntax", 400);
    }
    else if (err.name === "ValidationError") {
        customError = new CustomError_1.default(err.message, 400);
    }
    else if (err.code === 11000) {
        customError = new CustomError_1.default("Duplicate Key Found: Check Your Input", 400);
    }
    ;
    // Handle generic errors
    return res.status(customError.status || 500).json({
        success: false,
        message: customError.message
    });
};
// Export the customErrorHandler class as the default export
exports.default = customErrorHandler;
