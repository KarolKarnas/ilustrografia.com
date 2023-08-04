import { useState, useEffect } from 'react';
import { Project } from '../types';
import ProductGroup from './ProductGroup';
import projectService from '../services/projectService';

const ProjectGroup = () => {
	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		const fetchProjects = async () => {
			const projects = await projectService.getAll();
			setProjects(projects);
		};
		fetchProjects();
	}, []);

	return (
		<>
			{projects.map((proj) => (
				<div key={proj._id}>
					<h1 className='text-3xl text-center' key={proj._id}>
						{proj.name}
					</h1>
					<br />
					{proj.creatures.map((creature) => {
						// console.log(creature.productVariations);
						return (
							<ProductGroup
								key={creature._id}
								name={creature.name}
								creatureShortName={creature.shortName}
								productVariations={creature.productVariations}
								projShortName={proj.shortName}
								ratings={creature.ratings}
							/>
						);
					})}
				</div>
			))}
		</>
	);
};
export default ProjectGroup;
