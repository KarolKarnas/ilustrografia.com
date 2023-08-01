import projects from '../products';
import ProductGroup from './ProductGroup';

const ProjectGroup = () => {
  return (
    <>
    {projects.map((proj) => (
      <div key={proj._id}>
        <h1 className='text-3xl text-center' key={proj._id}>
          {proj.name}
        </h1>
        <br />
        {proj.creatures.map((creature) => {
          console.log(creature.productVariations);
          return (
            <ProductGroup
              key={creature._id}
              name={creature.name}
              creatureShortName={creature.shortName}
              productVariations={creature.productVariations}
              projShortName={proj.shortName}
            />
          );
        })}
      </div>
    ))}
    </>
  )
}
export default ProjectGroup