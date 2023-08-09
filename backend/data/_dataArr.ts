export const products = [
	{
		_id: '1',
		name: 'Bazylica',
		slug: 'bazylica',
		rating: {
			rating: 5,
			numReviews: 666,
		},
		categories: [
			{
				name: 'Nowosłowiański Spis Powszechny',
				slug: 'nowoslowianski-spis-powszechny',
			},
		],
		tags: [{ name: '', slug: '' }],
		images: ['/images/nowoslowianski-spis-powszechny/bazylica-1.jpg'],
		options: [
			{
				name: 'Material',
				slug: 'material',
				variations: [
					{
						title: 'Art Print',
						slug: 'art-print',
						images: [
							'/images/nowoslowianski-spis-powszechny/bazylica-art-print-1.jpg',
						],
					},
					{
						title: 'Painting On Canvas',
						slug: 'painting-on-canvas',
						images: [
							'/images/nowoslowianski-spis-powszechny/bazylica-painting-on-canvas-1.jpg',
						],
					},
					{
						title: 'Poster',
						slug: 'poster',
						images: [
							'/images/nowoslowianski-spis-powszechny/bazylica-poster-1.jpg',
						],
					},
					{
						title: 'Premium Print',
						slug: 'premium-print',
						images: [
							'/images/nowoslowianski-spis-powszechny/bazylica-premium-print-1.jpg',
						],
					},
				],
			},
			{
				name: 'Size',
				slug: 'size',
				variations: [
					{
						title: '20x30',
						slug: 's20x30',
						images: [],
					},
					{
						title: '20x40',
						slug: 's20x40',
						images: [],
					},
					{
						title: '30x40',
						slug: 's30x40',
						images: [],
					},
					{
						title: '40x60',
						slug: 's40x60',
						images: [],
					},
					{
						title: '50x70',
						slug: 's50x70',
						images: [],
					},
					{
						title: '60x90',
						slug: 's60x90',
						images: [],
					},
					{
						title: '70x100',
						slug: 's70x100',
						images: [],
					},
				],
			},
		],
		variations: [
			{
				options: { material: 'art-print', size: 's20x40' },
				SKU: '98765',
				price: 109,
				countInStock: 2,
				tags: [{ name: '', slug: '' }],
			},
			{
				options: { material: 'art-print', size: 's30x40' },
				SKU: '98766',
				price: 179,
				countInStock: 10,
				tags: [{ name: '', slug: '' }],
			},
			{
				options: { material: 'art-print', size: 's40x60' },
				SKU: '98767',
				price: 259,
				countInStock: 10,
				tags: [{ name: '', slug: '' }],
			},
			{
				options: { material: 'art-print', size: 's50x70' },
				SKU: '98768',
				price: 319,
				countInStock: 8,
				tags: [{ name: '', slug: '' }],
			},
			{
				options: { material: 'art-print', size: 's60x90' },
				SKU: '98769',
				price: 399,
				countInStock: 10,
				tags: [{ name: '', slug: '' }],
			},
			{
				options: { material: 'art-print', size: 's70x100' },
				SKU: '98770',
				price: 499,
				countInStock: 5,
				tags: [{ name: '', slug: '' }],
			},
			{
				options: { material: 'painting-on-canvas', size: 's20x40' },
				SKU: '98771',
				price: 209,
				countInStock: 5,
				tags: [{ name: '', slug: '' }],
			},
			{
				options: { material: 'painting-on-canvas', size: 's30x40' },
				SKU: '98772',
				price: 249,
				countInStock: 8,
				tags: [{ name: '', slug: '' }],
			},
			{
				options: { material: 'painting-on-canvas', size: 's40x60' },
				SKU: '98773',
				price: 299,
				countInStock: 15,
				tags: [{ name: '', slug: '' }],
			},
			{
				options: { material: 'painting-on-canvas', size: 's50x70' },
				SKU: '98774',
				price: 349,
				countInStock: 12,
				tags: [{ name: '', slug: '' }],
			},
			{
				options: { material: 'painting-on-canvas', size: 's60x90' },
				SKU: '98775',
				price: 449,
				countInStock: 7,
				tags: [{ name: '', slug: '' }],
			},
			{
				options: { material: 'painting-on-canvas', size: 's70x100' },
				SKU: '98776',
				price: 569,
				countInStock: 3,
				tags: [{ name: '', slug: '' }],
			},
			// POSTER
			{
				options: { material: 'poster', size: 's20x30' },
				SKU: '98777',
				price: 49,
				countInStock: 5,
				tags: [{ name: '', slug: '' }],
			},
			{
				options: { material: 'poster', size: 's30x40' },
				SKU: '98778',
				price: 59,
				countInStock: 6,
				tags: [{ name: '', slug: '' }],
			},
			{
				options: { material: 'poster', size: 's40x60' },
				SKU: '98779',
				price: 99,
				countInStock: 7,
				tags: [{ name: '', slug: '' }],
			},
			{
				options: { material: 'poster', size: 's50x70' },
				SKU: '98780',
				price: 129,
				countInStock: 6,
				tags: [{ name: '', slug: '' }],
			},
			{
				options: { material: 'poster', size: 's60x90' },
				SKU: '98781',
				price: 129,
				countInStock: 16,
				tags: [{ name: '', slug: '' }],
			},
			{
				options: { material: 'poster', size: 's70x100' },
				SKU: '98782',
				price: 209,
				countInStock: 11,
				tags: [{ name: '', slug: '' }],
			},
			// PREMIUM PRINT
			{
				options: { material: 'premium-print', size: 's20x30' },
				SKU: '98783',
				price: 59,
				countInStock: 5,
				tags: [{ name: '', slug: '' }],
			},
			{
				options: { material: 'premium-print', size: 's30x40' },
				SKU: '98784',
				price: 99,
				countInStock: 6,
				tags: [{ name: '', slug: '' }],
			},
			{
				options: { material: 'premium-print', size: 's40x60' },
				SKU: '98785',
				price: 149,
				countInStock: 7,
				tags: [{ name: '', slug: '' }],
			},
			{
				options: { material: 'premium-print', size: 's50x70' },
				SKU: '98786',
				price: 209,
				countInStock: 16,
				tags: [{ name: '', slug: '' }],
			},
			{
				options: { material: 'premium-print', size: 's60x90' },
				SKU: '98787',
				price: 269,
				countInStock: 6,
				tags: [{ name: '', slug: '' }],
			},
			{
				options: { material: 'premium-print', size: 's70x100' },
				SKU: '98788',
				price: 299,
				countInStock: 1,
				tags: [{ name: '', slug: '' }],
			},
		],
	},
];
