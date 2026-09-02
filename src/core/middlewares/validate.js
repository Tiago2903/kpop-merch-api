import { ValidationError } from '../errors/ValidationError.js';

export function validate(schema) {
    return function (req, res, next) {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            const message = result.error.errors.map((err) => `${err.path.join('.')}: ${err.message}`).join(', ');
            return next(new ValidationError(message));
        }

        req.body = result.data;
        next();
    }
}