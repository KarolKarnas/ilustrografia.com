import path from 'path';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();
import connectDB from './config/db';

import productRouter from './routes/productRoutes';
import userRouter from './routes/userRoutes';
import orderRouter from './routes/orderRoutes';
import uploadRouter from './routes/uploadRoutes';
import { errorHandler, notFound } from './middleware/errorMiddleware';

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.get('/ping', (_req, res) => {
	console.log('someone pinged here');
	res.send('pong');
});

app.use(cors());
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/upload', uploadRouter);

app.get('/api/config/paypal', (_req, res) =>
	res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

// const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
