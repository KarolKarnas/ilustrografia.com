// export const productVariations = [
// 	{
// 		name: 'Art Print',
// 		shortName: 'art-print',
// 		characteristics: [
// 			'Elegancki, gruby, matowy papier z wyczuwalną fakturą 270g',
// 			'Papier spełnia standardy papierów archiwalnych',
// 			'12-pigmentowy druk w trybie najwyższej jakości',
// 			'Każdy wydruk posiada klasyczne białe marginesy dookoła',
// 			'Wydruk sprzedawany bez ramki',
// 		],
// 		variations: [
// 			{ size: '20x40', price: 109 },
// 			{ size: '30x40', price: 179 },
// 			{ size: '40x60', price: 259 },
// 			{ size: '50x70', price: 319 },
// 			{ size: '60x90', price: 399 },
// 			{ size: '70x100', price: 499 },
// 		],
// 	},
// 	{
// 		name: 'Painting on Canvas',
// 		shortName: 'painting-on-canvas',
// 		characteristics: [
// 			'Bardzo solidne płótno canvas z wyraźną malarską strukturą 380g',
// 			'Płótno jest naciągnięte na drewniane krosno malarskie (tzw. blejtram)',
// 			'Drukowane ekologicznymi i bezzapachowymi atramentami',
// 			'Zadrukowane brzegi obrazu',
// 			'Obraz jest gotowy do zawieszenia na ścianie',
// 		],
// 		variations: [
// 			{ size: '20x40', price: 209 },
// 			{ size: '30x40', price: 249 },
// 			{ size: '40x60', price: 299 },
// 			{ size: '50x70', price: 349 },
// 			{ size: '60x90', price: 449 },
// 			{ size: '70x100', price: 569 },
// 		],
// 	},
// 	{
// 		name: 'Poster',
// 		shortName: 'poster',
// 		characteristics: [
// 			'Wysokiej jakości powlekany papier plakatowy 200g',
// 			'Duża odporność druku na promienie słoneczne',
// 			'Druk atramentami eco-solwentowymi',
// 			'Wydruk sprzedawany bez ramki',
// 		],
// 		variations: [
// 			{ size: '20x30', price: 49 },
// 			{ size: '30x40', price: 59 },
// 			{ size: '40x60', price: 99 },
// 			{ size: '50x70', price: 129 },
// 			{ size: '60x90', price: 169 },
// 			{ size: '70x100', price: 209 },
// 		],
// 	},
// 	{
// 		name: 'Premium Print',
// 		shortName: 'premium-print',
// 		characteristics: [
// 			'Półmatowy, gruby i wytrzymały papier 265g',
// 			'Druk atramentowy z zastosowaniem 11 atramentów w trybie najwyższej jakości',
// 			'Mocne, nasycone kolory',
// 			'Wydruk sprzedawany bez ramki',
// 		],
// 		variations: [
// 			{ size: '20x30', price: 59 },
// 			{ size: '30x40', price: 99 },
// 			{ size: '40x60', price: 149 },
// 			{ size: '50x70', price: 209 },
// 			{ size: '60x90', price: 269 },
// 			{ size: '70x100', price: 299 },
// 		],
// 	},
// ];

// const projects2 = [
// 	{
// 		name: 'Nowosłowiański Spis Powszechny',
// 		shortName: 'nowoslowianski-spis-powszechny',
// 		creatures: ['bazylica, bobo-lesne'],
// 	},
// ];

// const creaturesPost = [
// 	{
// 		_id: '1',
//     project: 'nowoslowianski-spis-powszechny',
// 		name: 'Bazylica',
// 		shortName: 'bazylica',
// 		latinName: 'Reprivatus Camenisus',
// 		type: 'Dawnosłowiańskie',
// 		category: 'Smokowate Mniejsze',
// 		subCategory: 'Regulus',
// 		species: 'Bazyliszek, żeń. Bazylica (Reprivatus Camenisus)',
// 		occurrence: 'Unikat. Prawdopodobnie ostatni przedstawiciel gatunku',
// 		properName: 'Anna Bronkiewicz-Faltz',
// 		blogImages: ['/images/airpods.jpg'],
// 		blogSketches: ['/images/airpods.jpg'],
// 		ytLink:
// 			'https://www.youtube.com/watch?v=u8d6Pbykjgg&ab_channel=ilustrografia',
// 		image: '/images/airpods.jpg',
// 		description: 'Bazylica jest super, description conditional rendering',
// 	},
// ];
// const creaturesProduct = [
// 	{
// 		_id: '1',
//     project: 'nowoslowianski-spis-powszechny',
// 		name: 'Bazylica',
// 		shortName: 'bazylica',
// 		productVariations,
// 		productStatistics: [
// 			'+50 do umiejętności tworzenia zaskórniaków',
// 			'+10 dla znajomości topografii Warszawy',
// 			'+25% ochrony przed zamienieniem w kamień',
// 			'Akt własności nieruchomości najbezpieczniej trzymać za wydrukiem',
// 		],
// 		rating: 4.9,
// 		numReviews: 1543,
// 		ratings: {
// 			'art-print': { rating: 4.9, numReviews: 123 },
// 			'painting-on-canvas': { rating: 2.9, numReviews: 23 },
// 			poster: { rating: 1.2, numReviews: 4 },
// 			'premium-print': { rating: 2.0, numReviews: 23 },
// 		},
// 		// ??
// 		artPrintImages: [],
// 		printOnCanvasImages: [],
// 		posterImages: [],
// 		premiumPrintImages: [],
// 	},
// ];




// const projects = [
// 	{
// 		_id: 1,
// 		name: 'Nowosłowiański Spis Powszechny',
// 		shortName: 'nowoslowianski-spis-powszechny',
// 		creatures: [
// 			{
// 				_id: '1',
// 				name: 'Bazylica',
// 				shortName: 'bazylica',
// 				latinName: 'Reprivatus Camenisus',
// 				type: 'Dawnosłowiańskie',
// 				category: 'Smokowate Mniejsze',
// 				subCategory: 'Regulus',
// 				species: 'Bazyliszek, żeń. Bazylica (Reprivatus Camenisus)',
// 				occurrence: 'Unikat. Prawdopodobnie ostatni przedstawiciel gatunku',
// 				properName: 'Anna Bronkiewicz-Faltz',
// 				blogImages: ['/images/airpods.jpg'],
// 				blogSketches: ['/images/airpods.jpg'],
// 				ytLink:
// 					'https://www.youtube.com/watch?v=u8d6Pbykjgg&ab_channel=ilustrografia',
// 				image: '/images/airpods.jpg',
// 				description: 'Bazylica',
// 				productVariations,
// 				productStatistics: [
// 					'+50 do umiejętności tworzenia zaskórniaków',
// 					'+10 dla znajomości topografii Warszawy',
// 					'+25% ochrony przed zamienieniem w kamień',
// 					'Akt własności nieruchomości najbezpieczniej trzymać za wydrukiem',
// 				],
// 				rating: 4.9,
// 				numReviews: 1543,
// 				ratings: {
// 					'art-print': { rating: 4.9, numReviews: 123 },
// 					'painting-on-canvas': { rating: 2.9, numReviews: 23 },
// 					poster: { rating: 1.2, numReviews: 4 },
// 					'premium-print': { rating: 2.0, numReviews: 23 },
// 				},
// 				// ??
// 				artPrintImages: [],
// 				printOnCanvasImages: [],
// 				posterImages: [],
// 				premiumPrintImages: [],
// 			},
// 			{
// 				_id: '2',
// 				name: 'Bobo Leśne',
// 				shortName: 'bobo-lesne',
// 				latinName: 'Vampus Trampus',
// 				type: 'Prasłowiańskie',
// 				category: 'Martwce',
// 				subCategory: 'Wampiry Dawne',
// 				species: 'Bobo Leśne (Energius Visisatis)',
// 				occurrence: 'Średnio',
// 				properName: 'Nieznana',
// 				blogImages: ['/images/airpods.jpg'],
// 				blogSketches: ['/images/airpods.jpg'],
// 				ytLink:
// 					'https://www.youtube.com/watch?v=enO_H99fqv8&ab_channel=ilustrografia',
// 				image: '/images/airpods.jpg',
// 				description: 'Bobobobobo',
// 				productVariations,
// 				productStatistics: [
// 					'+10 energii życiowej w poniedziałki',
// 					'+50 do układów u Borowego',
// 					'+15% dla wzrostu paprotek w salonie',
// 					'Zawieszona w sypialni poprawia sprężystość materaca w łóżku',
// 				],
// 				rating: 4.2,
// 				numReviews: 14,
// 				ratings: {
// 					'art-print': { rating: 2.9, numReviews: 13 },
// 					'painting-on-canvas': { rating: 2.1, numReviews: 2 },
// 					poster: { rating: 2.2, numReviews: 42312 },
// 					'premium-print': { rating: 1.0, numReviews: 1 },
// 				},
// 				// ??
// 				artPrintImages: [],
// 				printOnCanvasImages: [],
// 				posterImages: [],
// 				premiumPrintImages: [],
// 			},
// 		],
// 	},
// 	{
// 		_id: 2,
// 		name: 'Ilustracje Fantasy',
// 		shortName: 'ilustracje-fantasy',
// 		creatures: [
// 			{
// 				_id: '1',
// 				name: 'Nimfa Wiosenna',
// 				shortName: 'nimfa-wiosenna',
// 				latinName: '',
// 				type: '',
// 				category: '',
// 				subCategory: '',
// 				species: '',
// 				occurrence: '',
// 				properName: '',
// 				blogImages: ['/images/airpods.jpg'],
// 				blogSketches: ['/images/airpods.jpg'],
// 				ytLink: '',
// 				image: '/images/airpods.jpg',
// 				description: '',
// 				productVariations,
// 				productStatistics: [''],
// 				rating: 4.5,
// 				numReviews: 12,

// 				ratings: {
// 					'art-print': { rating: 1.9, numReviews: 3 },
// 					'painting-on-canvas': { rating: 2.1, numReviews: 2 },
// 					poster: { rating: 5, numReviews: 456435 },
// 					'premium-print': { rating: 1, numReviews: 2 },
// 				},
// 				// ??
// 				artPrintImages: [],
// 				printOnCanvasImages: [],
// 				posterImages: [],
// 				premiumPrintImages: [],
// 			},
// 		],
// 	},
// ];

// export default projects;

// // options: [
// // 	{
// // 		name: 'size',
// // 		values: [
// // 			{ '20x40': 109 },
// // 			{ '30x40': 179 },
// // 			{ '40x60': 259 },
// // 			{ '50x70': 319 },
// // 			{ '60x90': 399 },
// // 			{ '70x100': 499 },
// // 		],
// // 	},
// // ],

// // const productVariations = [
// // 	{
// // 		name: 'Art Print',
// // 		shortName: 'art-print',

// // 	},
// // 	{
// // 		name: 'Painting on Canvas',
// // 		shortName: 'painting-on-canvas',

// // 	},
// // 	{
// // 		name: 'Poster',
// // 		shortName: 'poster',

// // 	},
// // 	{
// // 		name: 'Premium Print',
// // 		shortName: 'premium-print',
// // 	},
// // ];
