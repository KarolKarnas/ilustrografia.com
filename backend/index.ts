import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
import connectDB from './config/db';

import productRouter from './routes/productRoutes';
import userRouter from './routes/userRoutes';
import { errorHandler, notFound } from './middleware/errorMiddleware';

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (_req, res) => {
	console.log('someone pinged here');
	res.send('pong');
});

app.use(cors());
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
