import { useState, useEffect } from 'react';
import axios from 'axios';
import { Project } from '../types';
// import projects from '../products';
import ProductGroup from './ProductGroup';

const ProjectGroup = () => {
	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		const fetchProjects = async () => {
			const { data } = await axios.get('/api/projects');
      console.log(data)
			setProjects(data);
		};
    fetchProjects()
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
