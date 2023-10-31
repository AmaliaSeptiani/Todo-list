/** @type {import('tailwindcss').Config} */
import form from '@tailwindcss/forms';

export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [form],
};
