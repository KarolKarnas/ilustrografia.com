import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
import connectDB from './config/db';

import productRouter from './routes/productRoute';
import { errorHandler, notFound } from './middleware/errorMiddleware';

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.get('/ping', (_req, res) => {
	console.log('someone pinged here');
	res.send('pong');
});

app.use(cors());
app.use(express.json());
app.use('/api/products', productRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
