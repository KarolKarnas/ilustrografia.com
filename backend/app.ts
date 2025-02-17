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
import ytRouter from './routes/ytRoutes';
import testRouter from './routes/testRoutes';
import { errorHandler, notFound } from './middleware/errorMiddleware';

connectDB();

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.use(cors());
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/upload', uploadRouter);
app.use('/api/videos', ytRouter);

app.get('/api/config/paypal', (_req, res) =>
	res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
	app.use('../../uploads', express.static('/var/data/uploads'));
	app.use(express.static(path.join(__dirname, '../../frontend/build')));

	app.get('*', (_req, res) =>
		res.sendFile(path.resolve(__dirname, '../../frontend/build/index.html'))
	);
} else {
	app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
	app.use('/api/testing', testRouter);
	app.get('/', (_req, res) => {
		res.send('API is running....');
	});
}

app.use(notFound);
app.use(errorHandler);

export default app;
