import Header from './components/Header';
import Footer from './components/Footer';
import ProductGroup from './components/ProductGroup';
import projects from './products';
const App = () => {
	console.log(projects);
	return (
		<div className='flex flex-col items-center justify-between min-h-screen'>
			<Header />
			<div>
				<h1 className='text-3xl font-bold text-center underline'>Ilustrografia</h1>
				{projects.map((proj) => (
					<div key={proj._id}>
						<h1 className='text-3xl text-center' key={proj._id}>
							{proj.name}
						</h1>
						<br />
						{proj.creatures.map((creature) => {
							console.log(creature.productVariations);
							return <ProductGroup key={creature._id} name={creature.name} creatureShortName={creature.shortName} productVariations={creature.productVariations} projShortName={proj.shortName}/>;
						})}
					</div>
				))}
			</div>

			<Footer />
		</div>
	);
};
export default App;
