export function notFoundHandler(req, res, next) {
    res.status(404).json({ message: "not found in the system." });
}