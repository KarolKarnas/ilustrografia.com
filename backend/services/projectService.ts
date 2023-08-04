import projects from '../data/products';
// import { productVariations } from '../data/products';
import { Project, Creature, Variation } from '../types';
import { findSubstring } from '../utils';

const getProjects = (): Project[] => {
	return projects;
};

const getProject = (projectName: string): Project | undefined => {
	const project = projects.find((project) => project.shortName === projectName);

	return project;
};

const getCreature = (
	projectName: string,
	creatureName: string
): Creature | undefined => {
	const project = projects.find((project) => project.shortName === projectName);

	const creature = project?.creatures.find(
		(creature) => creature.shortName === creatureName
	);

	return creature;
};

const getCreatureProduct = (
	projectName: string,
	creatureName: string,
	productName: string
): Variation[] | undefined => {
	const project = projects.find((project) => project.shortName === projectName);

	const creature = project?.creatures.find(
		(creature) => creature.shortName === creatureName
	);

	const variationShortName = findSubstring(productName);

	const productVariation = creature?.productVariations.find(
		(variation) => variation.shortName === variationShortName
	);

	// Return the 'variations' array from 'productVariation'
	return productVariation?.variations;
};

export default {
	getProjects,
	getProject,
	getCreature,
	getCreatureProduct,
};
