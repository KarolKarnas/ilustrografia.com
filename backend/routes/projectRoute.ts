import express from 'express';
import projectService from '../services/projectService';

const projectRouter = express.Router();

projectRouter.get('/', (_req, res) => {
	res.send(projectService.getProjects());
});

projectRouter.get('/:project', (req, res) => {
	const project = projectService.getProject(req.params.project);
	if (project) {
		res.send(project);
	} else {
		res.sendStatus(404);
	}
});

projectRouter.get('/:project/:creature', (req, res) => {
	const creature = projectService.getCreature(req.params.project, req.params.creature);
	if (creature) {
		res.send(creature);
	} else {
		res.sendStatus(404);
	}
});

projectRouter.get('/:project/:creature/:product', (req, res) => {
	const product = projectService.getCreatureProduct(req.params.project, req.params.creature, req.params.product);
	if (product) {
		res.send(product);
	} else {
		res.sendStatus(404);
	}
});

export default projectRouter;
