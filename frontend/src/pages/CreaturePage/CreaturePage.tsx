import { useEffect, useState } from 'react';
import projectService from '../../services/projectService';
import { Creature, Project } from '../../types';
import { useParams } from 'react-router-dom';

const CreaturePage = () => {
	// const [projects, setProjects] = useState<Project[]>([]);
	// const [project, setProject] = useState<Project>();
	const [creature, setCreature] = useState<Creature>();

  const { project: projectParam, creature: creatureParam } = useParams();
	// console.log(projectParam, creatureParam);

	useEffect(() => {
		const fetchProjects = async () => {
			const projects = await projectService.getAll();
      const project = projects.find(proj => proj.shortName === projectParam)
      const creature = project?.creatures.find(creature => creature.shortName === creatureParam)
			// setProjects(projects);
			// setProject(project);
			setCreature(creature);
		};
		fetchProjects();
	}, []);


	return <div>{creature && creature.name}</div>;
};

export default CreaturePage;
