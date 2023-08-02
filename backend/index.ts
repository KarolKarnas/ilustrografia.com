import express from 'express';
import projects from './data/products';
const app = express();
app.use(express.json());

const PORT = 5000;

app.get('/ping', (_req, res) => {
	console.log('someone pinged here');
	res.send('pong');
});

app.get('/api/projects', (_req, res) => {
	res.json(projects);
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
