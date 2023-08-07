export const products = [
	{
		_id: '1',
		name: 'Bazylica',
		slug: 'bazylica',
		rating: {
			rating: 4.9,
			numReviews: 2,
		},
		category: [
			{
				name: 'Nowosłowiański Spis Powszechny',
				slug: 'nowoslowianski-spis-powszechny',
			},
		],
		dimensions: {
			material: {
				title: 'Material',
				'art-print': {
					title: 'Art Print',
					images: [
						// '/images/nowoslowianski-spis-powszechny/bazylica/art-print/bazylica-art-print-1.jpg',
						'/images/nowoslowianski-spis-powszechny/bazylica-art-print-1.jpg',
					],
				},
				'painting-on-canvas': {
					title: 'Painting On Canvas',
					images: [
						'/images/nowoslowianski-spis-powszechny/bazylica-painting-on-canvas-1.jpg',
						// '/images/nowoslowianski-spis-powszechny/bazylica/painting-on-canvas/bazylica-painting-on-canvas-1.jpg',
					],
				},
				poster: {
					title: 'Poster',
					images: [
						'/images/nowoslowianski-spis-powszechny/bazylica-poster-1.jpg',
						// '/images/nowoslowianski-spis-powszechny/bazylica/poster/bazylica-poster-1.jpg',
					],
				},
				'premium-print': {
					title: 'Premium Print',
					images: [
						'/images/nowoslowianski-spis-powszechny/bazylica-premium-print-1.jpg',
						// '/images/nowoslowianski-spis-powszechny/bazylica/premium-print/bazylica-premium-print-1.jpg',
					],
				},
			},
			size: {
				title: 'Size',
				s20x30: {
					title: '20x30',
					images: [],
				},
				s20x40: {
					title: '20x40',
					images: [],
				},
				s30x40: {
					title: '30x40',
					images: [],
				},
				s40x60: {
					title: '40x60',
					images: [],
				},
				s50x70: {
					title: '50x70',
					images: [],
				},
				s60x90: {
					title: '60x90',
					images: [],
				},
				s70x100: {
					title: '70x100',
					images: [],
				},
			},
		},
		// here you need a stable way of generating keys from dimension data
		variations: [
			{
				dimensions: { material: 'art-print', size: 's20x40' },
				SKU: '98765',
				price: 109,
				countInStock: 2,
			},
			{
				dimensions: { material: 'art-print', size: 's30x40' },
				SKU: '98766',
				price: 179,
				countInStock: 10,
			},
			{
				dimensions: { material: 'art-print', size: 's40x60' },
				SKU: '98767',
				price: 259,
				countInStock: 10,
			},
			{
				dimensions: { material: 'art-print', size: 's50x70' },
				SKU: '98768',
				price: 319,
				countInStock: 8,
			},
			{
				dimensions: { material: 'art-print', size: 's60x90' },
				SKU: '98769',
				price: 399,
				countInStock: 10,
			},
			{
				dimensions: { material: 'art-print', size: 's70x100' },
				SKU: '98770',
				price: 499,
				countInStock: 5,
			},
			{
				dimensions: { material: 'painting-on-canvas', size: 's20x40' },
				SKU: '98771',
				price: 209,
				countInStock: 5,
			},
			{
				dimensions: { material: 'painting-on-canvas', size: 's30x40' },
				SKU: '98772',
				price: 249,
				countInStock: 8,
			},
			{
				dimensions: { material: 'painting-on-canvas', size: 's40x60' },
				SKU: '98773',
				price: 299,
				countInStock: 15,
			},
			{
				dimensions: { material: 'painting-on-canvas', size: 's50x70' },
				SKU: '98774',
				price: 349,
				countInStock: 12,
			},
			{
				dimensions: { material: 'painting-on-canvas', size: 's60x90' },
				SKU: '98775',
				price: 449,
				countInStock: 7,
			},
			{
				dimensions: { material: 'painting-on-canvas', size: 's70x100' },
				SKU: '98776',
				price: 569,
				countInStock: 3,
			},
			// POSTER
			{
				dimensions: { material: 'poster', size: 's20x30' },
				SKU: '98777',
				price: 49,
				countInStock: 5,
			},
			{
				dimensions: { material: 'poster', size: 's30x40' },
				SKU: '98778',
				price: 59,
				countInStock: 6,
			},
			{
				dimensions: { material: 'poster', size: 's40x60' },
				SKU: '98779',
				price: 99,
				countInStock: 7,
			},
			{
				dimensions: { material: 'poster', size: 's50x70' },
				SKU: '98780',
				price: 129,
				countInStock: 6,
			},
			{
				dimensions: { material: 'poster', size: 's60x90' },
				SKU: '98781',
				price: 129,
				countInStock: 16,
			},
			{
				dimensions: { material: 'poster', size: 's70x100' },
				SKU: '98782',
				price: 209,
				countInStock: 11,
			},
			// PREMIUM PRINT
			{
				dimensions: { material: 'premium-print', size: 's20x30' },
				SKU: '98783',
				price: 59,
				countInStock: 5,
			},
			{
				dimensions: { material: 'premium-print', size: 's30x40' },
				SKU: '98784',
				price: 99,
				countInStock: 6,
			},
			{
				dimensions: { material: 'premium-print', size: 's40x60' },
				SKU: '98785',
				price: 149,
				countInStock: 7,
			},
			{
				dimensions: { material: 'premium-print', size: 's50x70' },
				SKU: '98786',
				price: 209,
				countInStock: 16,
			},
			{
				dimensions: { material: 'premium-print', size: 's60x90' },
				SKU: '98787',
				price: 269,
				countInStock: 6,
			},
			{
				dimensions: { material: 'premium-print', size: 's70x100' },
				SKU: '98788',
				price: 299,
				countInStock: 1,
			},
		],
	},
	//BOBO
	{
		_id: '2',
		name: 'Bobo Leśne',
		slug: 'bobo-lesna',
		rating: {
			rating: 4.9,
			numReviews: 2,
		},
		category: [
			{
				name: 'Nowosłowiański Spis Powszechny',
				slug: 'nowoslowianski-spis-powszechny',
			},
		],
		dimensions: {
			material: {
				title: 'Material',
				'art-print': {
					title: 'Art Print',
					images: [
						// '/images/nowoslowianski-spis-powszechny/bobo-lesne/art-print/bobo-lesne-art-print-1.jpg',
						'/images/nowoslowianski-spis-powszechny/bobo-lesne-art-print-1.jpg',
					],
				},
				'painting-on-canvas': {
					title: 'Painting On Canvas',
					images: [
						'/images/nowoslowianski-spis-powszechny/bobo-lesne-painting-on-canvas-1.jpg',
						// '/images/nowoslowianski-spis-powszechny/bobo-lesne/painting-on-canvas/bobo-lesne-painting-on-canvas-1.jpg',
					],
				},
				poster: {
					title: 'Poster',
					images: [
						'/images/nowoslowianski-spis-powszechny/bobo-lesne-poster-1.jpg',
						// '/images/nowoslowianski-spis-powszechny/bobo-lesne/poster/bobo-lesne-poster-1.jpg',
					],
				},
				'premium-print': {
					title: 'Premium Print',
					images: [
						'/images/nowoslowianski-spis-powszechny/bobo-lesne-premium-print-1.jpg',
						// '/images/nowoslowianski-spis-powszechny/bobo-lesne/premium-print/bobo-lesne-premium-print-1.jpg',
					],
				},
			},
			size: {
				title: 'Size',
				s20x30: {
					title: '20x30',
					images: [],
				},
				s20x40: {
					title: '20x40',
					images: [],
				},
				s30x40: {
					title: '30x40',
					images: [],
				},
				s40x60: {
					title: '40x60',
					images: [],
				},
				s50x70: {
					title: '50x70',
					images: [],
				},
				s60x90: {
					title: '60x90',
					images: [],
				},
				s70x100: {
					title: '70x100',
					images: [],
				},
			},
		},
		// here you need a stable way of generating keys from dimension data
		variations: [
			{
				dimensions: { material: 'art-print', size: 's20x40' },
				SKU: '98789',
				price: 109,
				countInStock: 2,
			},
			{
				dimensions: { material: 'art-print', size: 's30x40' },
				SKU: '98790',
				price: 179,
				countInStock: 10,
			},
			{
				dimensions: { material: 'art-print', size: 's40x60' },
				SKU: '98791',
				price: 259,
				countInStock: 10,
			},
			{
				dimensions: { material: 'art-print', size: 's50x70' },
				SKU: '98792',
				price: 319,
				countInStock: 8,
			},
			{
				dimensions: { material: 'art-print', size: 's60x90' },
				SKU: '98793',
				price: 399,
				countInStock: 10,
			},
			{
				dimensions: { material: 'art-print', size: 's70x100' },
				SKU: '98794',
				price: 499,
				countInStock: 5,
			},
			{
				dimensions: { material: 'painting-on-canvas', size: 's20x40' },
				SKU: '98795',
				price: 209,
				countInStock: 5,
			},
			{
				dimensions: { material: 'painting-on-canvas', size: 's30x40' },
				SKU: '98796',
				price: 249,
				countInStock: 8,
			},
			{
				dimensions: { material: 'painting-on-canvas', size: 's40x60' },
				SKU: '98797',
				price: 299,
				countInStock: 15,
			},
			{
				dimensions: { material: 'painting-on-canvas', size: 's50x70' },
				SKU: '98798',
				price: 349,
				countInStock: 12,
			},
			{
				dimensions: { material: 'painting-on-canvas', size: 's60x90' },
				SKU: '98799',
				price: 449,
				countInStock: 7,
			},
			{
				dimensions: { material: 'painting-on-canvas', size: 's70x100' },
				SKU: '98800',
				price: 569,
				countInStock: 3,
			},
			// POSTER
			{
				dimensions: { material: 'poster', size: 's20x30' },
				SKU: '98801',
				price: 49,
				countInStock: 5,
			},
			{
				dimensions: { material: 'poster', size: 's30x40' },
				SKU: '98802',
				price: 59,
				countInStock: 6,
			},
			{
				dimensions: { material: 'poster', size: 's40x60' },
				SKU: '98803',
				price: 99,
				countInStock: 7,
			},
			{
				dimensions: { material: 'poster', size: 's50x70' },
				SKU: '98804',
				price: 129,
				countInStock: 6,
			},
			{
				dimensions: { material: 'poster', size: 's60x90' },
				SKU: '98805',
				price: 129,
				countInStock: 16,
			},
			{
				dimensions: { material: 'poster', size: 's70x100' },
				SKU: '98806',
				price: 209,
				countInStock: 11,
			},
			// PREMIUM PRINT
			{
				dimensions: { material: 'premium-print', size: 's20x30' },
				SKU: '98807',
				price: 59,
				countInStock: 5,
			},
			{
				dimensions: { material: 'premium-print', size: 's30x40' },
				SKU: '98808',
				price: 99,
				countInStock: 6,
			},
			{
				dimensions: { material: 'premium-print', size: 's40x60' },
				SKU: '98809',
				price: 149,
				countInStock: 7,
			},
			{
				dimensions: { material: 'premium-print', size: 's50x70' },
				SKU: '98810',
				price: 209,
				countInStock: 16,
			},
			{
				dimensions: { material: 'premium-print', size: 's60x90' },
				SKU: '98811',
				price: 269,
				countInStock: 6,
			},
			{
				dimensions: { material: 'premium-print', size: 's70x100' },
				SKU: '98812',
				price: 299,
				countInStock: 1,
			},
		],
	},
	// NIMFA WIOSENNA
	{
		_id: '3',
		name: 'Nimfa Wiosenna',
		slug: 'nimfa-wiosenna',
		rating: {
			rating: 4.9,
			numReviews: 2,
		},
		category: [
			{
				name: 'Ilustracje Fantasy',
				slug: 'ilustracje-fantasy',
			},
		],
		dimensions: {
			material: {
				title: 'Material',
				'art-print': {
					title: 'Art Print',
					images: [
						// '/images/ilustracje-fantasy/nimfa-wiosenna/art-print/nimfa-wiosenna-art-print-1.jpg',
						'/images/ilustracje-fantasy/nimfa-wiosenna-art-print-1.jpg',
					],
				},
				'painting-on-canvas': {
					title: 'Painting On Canvas',
					images: [
						'/images/ilustracje-fantasy/nimfa-wiosenna-painting-on-canvas-1.jpg',
						// '/images/ilustracje-fantasy/nimfa-wiosenna/painting-on-canvas/nimfa-wiosenna-painting-on-canvas-1.jpg',
					],
				},
				poster: {
					title: 'Poster',
					images: [
						'/images/ilustracje-fantasy/nimfa-wiosenna-poster-1.jpg',
						// '/images/ilustracje-fantasy/nimfa-wiosenna/poster/nimfa-wiosenna-poster-1.jpg',
					],
				},
				'premium-print': {
					title: 'Premium Print',
					images: [
						'/images/ilustracje-fantasy/nimfa-wiosenna-premium-print-1.jpg',
						// '/images/ilustracje-fantasy/nimfa-wiosenna/premium-print/nimfa-wiosenna-premium-print-1.jpg',
					],
				},
			},
			size: {
				title: 'Size',
				s20x30: {
					title: '20x30',
					images: [],
				},
				s20x40: {
					title: '20x40',
					images: [],
				},
				s30x40: {
					title: '30x40',
					images: [],
				},
				s40x60: {
					title: '40x60',
					images: [],
				},
				s50x70: {
					title: '50x70',
					images: [],
				},
				s60x90: {
					title: '60x90',
					images: [],
				},
				s70x100: {
					title: '70x100',
					images: [],
				},
			},
		},
		// here you need a stable way of generating keys from dimension data
		variations: [
			{
				dimensions: { material: 'art-print', size: 's20x40' },
				SKU: '98813',
				price: 109,
				countInStock: 2,
			},
			{
				dimensions: { material: 'art-print', size: 's30x40' },
				SKU: '98814',
				price: 179,
				countInStock: 10,
			},
			{
				dimensions: { material: 'art-print', size: 's40x60' },
				SKU: '98815',
				price: 259,
				countInStock: 10,
			},
			{
				dimensions: { material: 'art-print', size: 's50x70' },
				SKU: '98816',
				price: 319,
				countInStock: 8,
			},
			{
				dimensions: { material: 'art-print', size: 's60x90' },
				SKU: '98817',
				price: 399,
				countInStock: 10,
			},
			{
				dimensions: { material: 'art-print', size: 's70x100' },
				SKU: '98819',
				price: 499,
				countInStock: 5,
			},
			{
				dimensions: { material: 'painting-on-canvas', size: 's20x40' },
				SKU: '98820',
				price: 209,
				countInStock: 5,
			},
			{
				dimensions: { material: 'painting-on-canvas', size: 's30x40' },
				SKU: '98821',
				price: 249,
				countInStock: 8,
			},
			{
				dimensions: { material: 'painting-on-canvas', size: 's40x60' },
				SKU: '98822',
				price: 299,
				countInStock: 15,
			},
			{
				dimensions: { material: 'painting-on-canvas', size: 's50x70' },
				SKU: '98823',
				price: 349,
				countInStock: 12,
			},
			{
				dimensions: { material: 'painting-on-canvas', size: 's60x90' },
				SKU: '98824',
				price: 449,
				countInStock: 7,
			},
			{
				dimensions: { material: 'painting-on-canvas', size: 's70x100' },
				SKU: '98825',
				price: 569,
				countInStock: 3,
			},
			// POSTER
			{
				dimensions: { material: 'poster', size: 's20x30' },
				SKU: '98826',
				price: 49,
				countInStock: 5,
			},
			{
				dimensions: { material: 'poster', size: 's30x40' },
				SKU: '98827',
				price: 59,
				countInStock: 6,
			},
			{
				dimensions: { material: 'poster', size: 's40x60' },
				SKU: '98828',
				price: 99,
				countInStock: 7,
			},
			{
				dimensions: { material: 'poster', size: 's50x70' },
				SKU: '98829',
				price: 129,
				countInStock: 6,
			},
			{
				dimensions: { material: 'poster', size: 's60x90' },
				SKU: '98830',
				price: 129,
				countInStock: 16,
			},
			{
				dimensions: { material: 'poster', size: 's70x100' },
				SKU: '98831',
				price: 209,
				countInStock: 11,
			},
			// PREMIUM PRINT
			{
				dimensions: { material: 'premium-print', size: 's20x30' },
				SKU: '98832',
				price: 59,
				countInStock: 5,
			},
			{
				dimensions: { material: 'premium-print', size: 's30x40' },
				SKU: '98833',
				price: 99,
				countInStock: 6,
			},
			{
				dimensions: { material: 'premium-print', size: 's40x60' },
				SKU: '98834',
				price: 149,
				countInStock: 7,
			},
			{
				dimensions: { material: 'premium-print', size: 's50x70' },
				SKU: '98835',
				price: 209,
				countInStock: 16,
			},
			{
				dimensions: { material: 'premium-print', size: 's60x90' },
				SKU: '98836',
				price: 269,
				countInStock: 6,
			},
			{
				dimensions: { material: 'premium-print', size: 's70x100' },
				SKU: '98837',
				price: 299,
				countInStock: 1,
			},
		],
	},
];
