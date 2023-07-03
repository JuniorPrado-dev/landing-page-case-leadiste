import '@/styles/globals.css';
import type { AppProps } from 'next/app';

// import {Pacifico} from '@next/font/google';
// export const pacifico=Pacifico({
// 	weight:'400',
// 	display:'swap',
// 	subsets:['latin'],
// 	variable:'--font-pacifico'
// });

// import localFont from '@next/font/local';

// const plus=localFont({
// 	src:'../fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf'
// }
// );

export default function App({ Component, pageProps }: AppProps) {
	return (<Component {...pageProps} />);
}
