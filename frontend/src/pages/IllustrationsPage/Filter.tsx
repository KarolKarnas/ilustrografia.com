import { useEffect, useState } from 'react';
import { Project } from '../../types';
import projectService from '../../services/projectService';

import { Link } from 'react-router-dom';

const Filter = () => {
	const [projects, setProjects] = useState<Project[]>([]);
	const [active, setActive] = useState('all');

	useEffect(() => {
		const fetchProjects = async () => {
			const projects = await projectService.getAll();
			setProjects(projects);
		};
		fetchProjects();
	}, []);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const btnValue = e.currentTarget.value;
		// console.log(btnValue)
		setActive(btnValue);
		console.log(active);
		// const newFilterImages = images.filter((item) => item.category === btnValue);
		// if (btnValue === "all") {
		//   setFilterImages(images);
		// } else {
		//   setFilterImages(newFilterImages);
		// }
	};

	return (
		<div className='flex flex-col items-center'>
			{/* BUTTONS */}
			<div className='flex gap-5 my-10'>
				<button
					onClick={handleClick}
					value={'all'}
					className={`${
						active === 'all' ? 'bg-red-500 text-red-50' : ''
					} py-2 px-5 rounded-3xl border-[1px] transition-all duration-300 hover:bg-red-500 hover:text-red-50 border-solid border-red-500 text-red-500 `}
				>
					All
				</button>

				{projects.map((project) => {
					const value = project.shortName;
					return (
						<button
							onClick={handleClick}
							key={project._id}
							value={value}
							className={` ${
								active === value ? 'bg-red-500 text-red-50' : ''
							} py-2 px-5 rounded-3xl border-[1px] transition-all duration-300 hover:bg-red-500 hover:text-red-50 border-solid border-red-500 text-red-500 `}
						>
							{project.name}
						</button>
					);
				})}
			</div>
			{/* IMAGES */}
			<div className='grid grid-cols-3 gap-5 w-8/12'>
				{projects.map((project) =>
					project.creatures.map((creature) => (
						<Link key={creature._id} to={`/projects/${project.shortName}/${creature.shortName}`}>
							<img
								src={`/images/${project.shortName}/${creature.shortName}/post/${creature.shortName}-1.jpg`}
							/>
						</Link>
					))
				)}
			</div>
		</div>
	);
};

export default Filter;
