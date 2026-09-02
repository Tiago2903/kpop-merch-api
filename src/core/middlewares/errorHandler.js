import { AppError } from "../errors/AppError.js";

export function errorHandler(err, req, res, next) {
    console.error(err);

    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            message: err.message,
        });
        return;
    }

    res.status(500).json({ message: "internal server error." });
}