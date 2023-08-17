type Props = {
	variationMaterial: string;
};

interface Char {
	[key: string]: string[];
}

const characteristics: Char = {
	'art-print': [
		'Elegancki, gruby, matowy papier z wyczuwalną fakturą 270g',

		'Papier spełnia standardy papierów archiwalnych',

		'12-pigmentowy druk w trybie najwyższej jakości',
		'Każdy wydruk posiada klasyczne białe marginesy dookoła',
		'Wydruk sprzedawany bez ramki',
	],
	'painting-on-canvas': [
		' Bardzo solidne płótno canvas z wyraźną malarską strukturą 380g',
		'Płótno jest naciągnięte na drewniane krosno malarskie (tzw. blejtram)',
		'Drukowane ekologicznymi i bezzapachowymi atramentami',
		'Zadrukowane brzegi obrazu',
		'Obraz jest gotowy do zawieszenia na ścianie',
	],
	poster: [
		' Wysokiej jakości powlekany papier plakatowy 200g',
		'Duża odporność druku na promienie słoneczne',
		'Druk atramentami eco-solwentowymi',
		'Wydruk sprzedawany bez ramki',
	],
	'premium-print': [
		'  Półmatowy, gruby i wytrzymały papier 265g',
		'Druk atramentowy z zastosowaniem 11 atramentów w trybie najwyższej jakości',
		'Mocne, nasycone kolory',
		'Wydruk sprzedawany bez ramki',
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
