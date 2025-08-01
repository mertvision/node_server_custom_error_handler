// Define the CustomError class extending from Error
class CustomError extends Error {
    // The status property is public and of type number
    public status: number;

    // The constructor is the initializer function
    constructor(message: string, status: number) {
        super(message);

        this.status = status;
        this.name = "CustomError"; 
    };
};

// Export the CustomError class as the default export
export default CustomError;
