export const productVariations = [
	{
		name: 'Art Print',
		shortName: 'art-print',
		description:
			'Wydruki Fine Art Print (Giclée) to najwyższej jakości druk pigmentowy oparty o bazę żywiczną, który wykorzystuje materiały klasy archiwalnej. Co to oznacza? Że Twój wydruk to technologia jakiej używają muzea i domy aukcyjne; nie żółknie, nie blaknie i zachowuje swoją jakość gwarantowaną na co najmniej 100 lat. Ten najbardziej profesjonalny druk artystyczny wspomagany jest także przez użycie bezkwasowych papierów, dzięki którym widać każdy detal i kolor. Metoda Fine Art Print pozwoli Ci uzyskać wydruk o absolutnie najlepszych parametrach jakościowych dostępnych na rynku. Do tego dochodzi jego długowieczność i genialna prezencja. Ponadto, wydruki Giclée, po podpisaniu przez autora oryginału, zyskują wartość kolekcjonerską oraz traktowane są na równi z dziełami sztuki nowoczesnej.Czas zainwestować w perfekcję, nie sądzisz?',
		characteristics: [
			'Elegancki, gruby, matowy papier z wyczuwalną fakturą 270g',
			'Papier spełnia standardy papierów archiwalnych',
			'12-pigmentowy druk w trybie najwyższej jakości',
			'Każdy wydruk posiada klasyczne białe marginesy dookoła',
			'Wydruk sprzedawany bez ramki',
		],
		variations: [
			{ size: '20x40', price: 109 },
			{ size: '30x40', price: 179 },
			{ size: '40x60', price: 259 },
			{ size: '50x70', price: 319 },
			{ size: '60x90', price: 399 },
			{ size: '70x100', price: 499 },
		],
	},
	{
		name: 'Painting on Canvas',
		shortName: 'painting-on-canvas',
		description:
			'Te wyjątkowe druki powstają na tkaninie Canvas, o charakterystyce bawełny. Materiał ten ma niesamowitą fakturę, która nada Twojemu obrazowi nieprzeciętny charakter i klimat. To wszystko zwieńczy naciągnięcie druku na drewniane, sosnowe ramy, dzięki czemu uzyskasz fenomenalny efekt prawdziwej pracy malarskiej. Zwróć także uwagę, że do produkcji obrazu użyto tylko ekologicznych i bezzapachowych atramentów, które zapewnią bezpieczeństwo dla Twojego zdrowia i środowiska. Ułatwione Ci zostanie także zawieszenie obrazu na ścianie – płótno naciągane jest na naturalną, drewnianą konstrukcję z zadrukowanymi krawędziami bocznymi, więc nie musisz wkładać obrazu w ramę.Wybieraj i zawieszaj!',
		characteristics: [
			'Bardzo solidne płótno canvas z wyraźną malarską strukturą 380g',
			'Płótno jest naciągnięte na drewniane krosno malarskie (tzw. blejtram)',
			'Drukowane ekologicznymi i bezzapachowymi atramentami',
			'Zadrukowane brzegi obrazu',
			'Obraz jest gotowy do zawieszenia na ścianie',
		],
		variations: [
			{ size: '20x40', price: 209 },
			{ size: '30x40', price: 249 },
			{ size: '40x60', price: 299 },
			{ size: '50x70', price: 349 },
			{ size: '60x90', price: 449 },
			{ size: '70x100', price: 569 },
		],
	},
	{
		name: 'Poster',
		shortName: 'poster',
		description:
			'Wydruk plakatowy powstaje na atramentowym ploterze, gdzie tusze wodne zastępuje się pigmentowymi atramentami eco-solwentowymi. Takie atramenty bazując na organicznych rozpuszczalnikach, są przyjazne środowisku, dzięki czemu świadomie wspierasz dobro naszej planety. Możesz mieć więc pewność co do trafnej inwestycji w plakat. Ponadto, atramenty eco-solwentowe słyną z bardzo dużej odporności druku, zwłaszcza na promienie słoneczne. Sprawi to, że zyskasz dowolność w tym, gdzie plakat zawiesisz – zarówno miejsca nasłonecznione, jak i ciemne, nie będą wpływać na jakość ilustracji. Wydruk powstaje na lekko sztywnym i trwałym papierze 200g, który pozwoli Ci cieszyć się jego dużą wytrzymałością. Wiesz już jaki plakat wybierzesz?',
		characteristics: [
			'Wysokiej jakości powlekany papier plakatowy 200g',
			'Duża odporność druku na promienie słoneczne',
			'Druk atramentami eco-solwentowymi',
			'Wydruk sprzedawany bez ramki',
		],
		variations: [
			{ size: '20x30', price: 49 },
			{ size: '30x40', price: 59 },
			{ size: '40x60', price: 99 },
			{ size: '50x70', price: 129 },
			{ size: '60x90', price: 169 },
			{ size: '70x100', price: 209 },
		],
	},
	{
		name: 'Premium Print',
		shortName: 'premium-print',
		description:
			'Wydruk Premium używa technologii atramentowej, która we współpracy z półmatowym, grubym papierem 265g, sprawi że Twoja ilustracja będzie delikatnie i intrygująco odbijała światło. Ponadto papier ten wykazuje niezwykłą wytrzymałość, będąc dużo odporniejszym na deformacje i wilgoć w pomieszczeniu. Dodatkowo, do produkcji papieru wykorzystano specjalistyczną emulsję, która tworzy powłokę gwarantującą mocne, nasycone kolory oraz wysoką jakość i ostrość wydruku. Dzięki temu Twoja ilustracja zyska nie tylko niezwykły, wyróżniający się wygląd, ale także trwałość i solidność pozwalającą cieszyć się nim przez długie lata. Pozwól sobie na wydruk Premium!',
		characteristics: [
			'Półmatowy, gruby i wytrzymały papier 265g',
			'Druk atramentowy z zastosowaniem 11 atramentów w trybie najwyższej jakości',
			'Mocne, nasycone kolory',
			'Wydruk sprzedawany bez ramki',
		],
		variations: [
			{ size: '20x30', price: 59 },
			{ size: '30x40', price: 99 },
			{ size: '40x60', price: 149 },
			{ size: '50x70', price: 209 },
			{ size: '60x90', price: 269 },
			{ size: '70x100', price: 299 },
		],
	},
];

const projects = [
	{
		_id: 1,
		name: 'Nowosłowiański Spis Powszechny',
		shortName: 'nowoslowianski-spis-powszechny',
		creatures: [
			{
				_id: '1',
				name: 'Bazylica',
				shortName: 'bazylica',
				latinName: 'Reprivatus Camenisus',
				type: 'Dawnosłowiańskie',
				category: 'Smokowate Mniejsze',
				subCategory: 'Regulus',
				species: 'Bazyliszek, żeń. Bazylica (Reprivatus Camenisus)',
				occurrence: 'Unikat. Prawdopodobnie ostatni przedstawiciel gatunku',
				properName: 'Anna Bronkiewicz-Faltz',
				blogImages: ['/images/airpods.jpg'],
				blogSketches: ['/images/airpods.jpg'],
				ytLink:
					'https://www.youtube.com/watch?v=u8d6Pbykjgg&ab_channel=ilustrografia',
				image: '/images/airpods.jpg',
				description: 'Bazylica',
				productVariations,
				productStatistics: [
					'+50 do umiejętności tworzenia zaskórniaków',
					'+10 dla znajomości topografii Warszawy',
					'+25% ochrony przed zamienieniem w kamień',
					'Akt własności nieruchomości najbezpieczniej trzymać za wydrukiem',
				],
				rating: 4.9,
				numReviews: 1543,
				ratings: {
					'art-print': { rating: 4.9, numReviews: 123 },
					'painting-on-canvas': { rating: 2.9, numReviews: 23 },
					poster: { rating: 1.2, numReviews: 4 },
					'premium-print': { rating: 2.0, numReviews: 23 },
				},
				// ??
				artPrintImages: [],
				printOnCanvasImages: [],
				posterImages: [],
				premiumPrintImages: [],
			},
			{
				_id: '2',
				name: 'Bobo Leśne',
				shortName: 'bobo-lesne',
				latinName: 'Vampus Trampus',
				type: 'Prasłowiańskie',
				category: 'Martwce',
				subCategory: 'Wampiry Dawne',
				species: 'Bobo Leśne (Energius Visisatis)',
				occurrence: 'Średnio',
				properName: 'Nieznana',
				blogImages: ['/images/airpods.jpg'],
				blogSketches: ['/images/airpods.jpg'],
				ytLink:
					'https://www.youtube.com/watch?v=enO_H99fqv8&ab_channel=ilustrografia',
				image: '/images/airpods.jpg',
				description: 'Bobobobobo',
				productVariations,
				productStatistics: [
					'+10 energii życiowej w poniedziałki',
					'+50 do układów u Borowego',
					'+15% dla wzrostu paprotek w salonie',
					'Zawieszona w sypialni poprawia sprężystość materaca w łóżku',
				],
				rating: 4.2,
				numReviews: 14,
				ratings: {
					'art-print': { rating: 2.9, numReviews: 13 },
					'painting-on-canvas': { rating: 2.1, numReviews: 2 },
					poster: { rating: 2.2, numReviews: 42312 },
					'premium-print': { rating: 1.0, numReviews: 1 },
				},
				// ??
				artPrintImages: [],
				printOnCanvasImages: [],
				posterImages: [],
				premiumPrintImages: [],
			},
		],
	},
	{
		_id: 2,
		name: 'Ilustracje Fantasy',
		shortName: 'ilustracje-fantasy',
		creatures: [
			{
				_id: '1',
				name: 'Nimfa Wiosenna',
				shortName: 'nimfa-wiosenna',
				latinName: '',
				type: '',
				category: '',
				subCategory: '',
				species: '',
				occurrence: '',
				properName: '',
				blogImages: ['/images/airpods.jpg'],
				blogSketches: ['/images/airpods.jpg'],
				ytLink: '',
				image: '/images/airpods.jpg',
				description: '',
				productVariations,
				productStatistics: [''],
				rating: 4.5,
				numReviews: 12,

				ratings: {
					'art-print': { rating: 1.9, numReviews: 3 },
					'painting-on-canvas': { rating: 2.1, numReviews: 2 },
					poster: { rating: 5, numReviews: 456435 },
					'premium-print': { rating: 1, numReviews: 2 },
				},
				// ??
				artPrintImages: [],
				printOnCanvasImages: [],
				posterImages: [],
				premiumPrintImages: [],
			},
		],
	},
];

export default projects;


		// options: [
		// 	{
		// 		name: 'size',
		// 		values: [
		// 			{ '20x40': 109 },
		// 			{ '30x40': 179 },
		// 			{ '40x60': 259 },
		// 			{ '50x70': 319 },
		// 			{ '60x90': 399 },
		// 			{ '70x100': 499 },
		// 		],
		// 	},
		// ],


		// const productVariations = [
		// 	{
		// 		name: 'Art Print',
		// 		shortName: 'art-print',
			
		// 	},
		// 	{
		// 		name: 'Painting on Canvas',
		// 		shortName: 'painting-on-canvas',
				
		// 	},
		// 	{
		// 		name: 'Poster',
		// 		shortName: 'poster',
			
		// 	},
		// 	{
		// 		name: 'Premium Print',
		// 		shortName: 'premium-print',
		// 	},
		// ];