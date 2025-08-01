/**
 * @file index.ts
 * @fileoverview This file defines a Node server and handles the setup for an example error middleware
 * 
 * @version 1.0.0
 * @license MIT
 * @author Mert Özdemir <mertozdeemiir@icloud.com> (https://github.com/mertvision)
 */

// Importing third-party modules
import express, {Request, Response, NextFunction, Express} from 'express';
// Importing custom modules
import CustomError from './CustomError';
import customErrorHandler from './customErrorHandler';

// Define a server variable and assign it the value of express()
const server: Express= express();

// The PORT that the server will listen on
const PORT = 3000;

// A test route has been created for the error
server.get('/errorTest', (req: Request, res: Response, next: NextFunction) => {
    // Return the error to the next middleware layer
    return next(new CustomError("Error", 404));
});

// The customErrorHandler middleware was included as app.use(customErrorHandler())
server.use(customErrorHandler);

// Make the server listen on the PORT and start it up
server.listen(PORT, () => {
    // Log to the console
    console.log(`Server is running on port ${PORT}..`);
});