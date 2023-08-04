import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import projects from './data/products';
import { productVariations } from './data/products';
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

// const PORT = 5000;

app.get('/ping', (_req, res) => {
	console.log('someone pinged here');
	res.send('pong');
});

app.get('/api/projects', (_req, res) => {
	res.json(projects);
});

app.get('/api/product-variations', (_req, res) => {
	res.json(productVariations);
});

//PROJECT
app.get('/api/projects/:project', (req, res) => {
	const project = projects.find(
		(project) => project.shortName === req.params.project
	);
	res.json(project);
});

//CREATURE
app.get('/api/projects/:project/:creature', (req, res) => {
	const project = projects.find(
		(project) => project.shortName === req.params.project
	);

	const creature = project?.creatures.find(
		(creature) => creature.shortName === req.params.creature
	);
	res.json(creature);
});

//PRODUCT

app.get('/api/projects/:project/:creature/:product', (req, res) => {
	function findSubstring(input: string): string | null {
		if (!input) {
			return null; // Return null for undefined input
		}
		const substringsToCheck = [
			'art-print',
			'painting-on-canvas',
			'poster',
			'premium-print',
		];
		const regex = new RegExp(substringsToCheck.join('|'), 'i'); // 'i' flag for case-insensitive matching
		const match = input.match(regex);
		return match ? match[0] : null;
	}

	const variationShortName = findSubstring(req.params.product);

	const project = projects.find(
		(project) => project.shortName === req.params.project
	);

	const creature = project?.creatures.find(
		(creature) => creature.shortName === req.params.creature
	);

	const productVariations = creature?.productVariations.find(
		(variation) => variation.shortName === variationShortName
	);

	res.send(productVariations?.variations);
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
