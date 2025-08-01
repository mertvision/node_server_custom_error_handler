"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define the CustomError class extending from Error
class CustomError extends Error {
    // The constructor is the initializer function
    constructor(message, status) {
        super(message);
        this.status = status;
        this.name = "CustomError";
    }
    ;
}
;
// Export the CustomError class as the default export
exports.default = CustomError;
