type Props = {
	variationMaterial: string;
};

interface Char {
	[key: string]: string[];
}

const characteristics: Char = {
	'art-print': [
    'Elegant, thick, matte paper with a noticeable texture, 270g',

    'Paper meets archival paper standards',

    '12-pigment print in highest quality mode',
    'Each print has classic white margins all around',
    'Print is sold without a frame',
],
'painting-on-canvas': [
    'Very sturdy canvas with a distinct painterly texture, 380g',
    'Canvas is stretched on a wooden painting frame (called stretcher bars)',
    'Printed with eco-friendly and odorless inks',
    'Edges of the image are printed',
    'The painting is ready to hang on the wall',
],
'poster': [
	'High-quality coated poster paper, 200g',
	'High resistance to sunlight exposure',
	'Printed with eco-solvent inks',
	'Print is sold without a frame',
],
'premium-print': [
	'Semi-matte, thick, and durable paper, 265g',
	'Inkjet printing using 11 inks in the highest quality mode',
	'Vibrant, saturated colors',
	'Print is sold without a frame',
],
};

const VariationCharacteristics = ({ variationMaterial }: Props) => {
	return (
		<ul className='list-disc pl-8'>
			{characteristics[variationMaterial].map((char, index) => (
				<li className='text-xs text-zinc-500  ' key={index}>
					{char}
				</li>
			))}
		</ul>
	);
};
export default VariationCharacteristics;
