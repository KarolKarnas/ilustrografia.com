/** @type {import('tailwindcss').Config} */

import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';

export const darkMode = 'class';
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
	fontFamily: {
		'cormorant-infant': ['"Cormorant Infant"', 'serif'],
		lato: ['Lato', 'sans-serif'],
		fondamento: ['Fondamento', 'cursive'],
		sans: ['lato', ..._fontFamily.serif],
	},
	extend: {
		animation: {
			'spin-slow': 'spin 3s linear infinite',
		},
		spacing: {
			128: '32rem',
			192: '48rem',
			256: '64rem',
		},
		dropShadow: {
			hero: [
				'4px 4px 10px rgba(0, 0, 0, 0.95)',
				'2px 1px 0px rgba(0, 0, 0, 0.55)',
			],
		},
	},
};
export const plugins = [];
