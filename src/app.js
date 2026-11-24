import express from 'express';
import { notFoundHandler } from './core/middlewares/notFound.js';
import { errorHandler } from './core/middlewares/errorHandler.js';
import {router as mainRouter} from './routes/index.js';

const app = express();

app.get('/health', (req, res) => {
    res.status(200).json({ message: "ok" });
});
app.use(mainRouter);
app.use(notFoundHandler);
app.use(errorHandler);

export { app };