import Agencias from '@/sections/agencias';
import data from '@/data/data.json';
import ChatBot from '@/sections/chatbot';
import GeracaoLeads from '@/sections/geracao-leads';
import MarketingDigital from '@/sections/marketing-digital';
import MidiaPage from '@/sections/midia-page';
import Menu from '@/componentes/menu';
import { useState } from 'react';
import { TVideo } from '@/types';

export default function MainContext(): JSX.Element {
	//array de dados
	const dataVideos:TVideo[]=data.videos;
	//array de  videos 
	const [videos,setVideos]=useState(dataVideos);
	//inicia na seção de videos
	const [section, setSection] = useState(4);
	console.log({videos});
	let sectionContext;
	switch (section) {
	case 1:
		sectionContext = <Agencias />;
		break;
	case 2:
		sectionContext = <ChatBot />;
		break;
	case 3:
		sectionContext = <MarketingDigital />;
		break;
	case 4:
		sectionContext = <GeracaoLeads videos={videos} />;
		break;
	case 5:
		sectionContext = <MidiaPage />;
		break;
	}
	return (
		<>
			<Menu videos={videos} setVideos={setVideos} section={section} setSection={setSection} />
			{sectionContext}
		</>
	);
}
