import localFont from 'next/font/local';
export const pacifico=localFont({
	src:'../../public/assets/fonts/Pacifico-Regular.ttf',
	weight:'400',
	display:'swap',
	variable:'--font-pacifico'
});
export const plusItalic=localFont({
	src:'../../public/assets/fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf',
	display:'swap',
	variable:'--font-plusJ-italic'
});
export const plusVariable=localFont({
	src:'../../public/assets/fonts/PlusJakartaSans-VariableFont_wght.ttf',
	display:'swap',
	variable:'--font-plusJ-variable'
});
