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
	},
};
export const plugins = [];
