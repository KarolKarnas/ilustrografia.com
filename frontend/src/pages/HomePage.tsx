import ProjectGroup from '../components/ProjectGroup';

const HomeScreen = () => {
	return (
		<>
			<h1 className='text-3xl font-bold text-center mt-5'>
				Welcome to ilustrografia
			</h1>
			<h2 className='text-xl font-bold text-center underline mb-10'>
				These are our products:
			</h2>
			<ProjectGroup />
		</>
	);
};
export default HomeScreen;
