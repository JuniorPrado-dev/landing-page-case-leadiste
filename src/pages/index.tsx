import Header from '@/componentes/header';
import MainContext from '@/componentes/main-content';
import Marketing from '@/componentes/marketing';
import Head from 'next/head';
export default function Home(){
	

	return <>
		<Head>
			<title>LandingPage</title>
			<meta name="description" content="Generated by Jr Prado dev" />
			<meta name='charset' content='UTF-8'/>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/assets/images/asset-header.png" />
		</Head>
		<Header/>	
		<Marketing/>
		<MainContext/>
	</>;
}