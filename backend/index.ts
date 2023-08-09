import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
import productRouter from './routes/productRoute';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/products', productRouter);

app.get('/ping', (_req, res) => {
	console.log('someone pinged here');
	res.send('pong');
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
