"use strict";
/**
 * @file index.ts
 * @fileoverview This file defines a Node server and handles the setup for an example error middleware
 *
 * @version 1.0.0
 * @license MIT
 * @author Mert Özdemir <mertozdeemiir@icloud.com> (https://github.com/mertvision)
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing third-party modules
const express_1 = __importDefault(require("express"));
// Importing custom modules
const CustomError_1 = __importDefault(require("./CustomError"));
const customErrorHandler_1 = __importDefault(require("./customErrorHandler"));
// Define a server variable and assign it the value of express()
const server = (0, express_1.default)();
// The PORT that the server will listen on
const PORT = 3000;
// A test route has been created for the error
server.get('/errorTest', (req, res, next) => {
    // Return the error to the next middleware layer
    return next(new CustomError_1.default("Error", 404));
});
// The customErrorHandler middleware was included as app.use(customErrorHandler())
server.use(customErrorHandler_1.default);
// Make the server listen on the PORT and start it up
server.listen(PORT, () => {
    // Log to the console
    console.log(`Server is running on port ${PORT}..`);
});
