import Agencias from '@/sections/agencias';
import ChatBot from '@/sections/chatbot';
import GeracaoLeads from '@/sections/geracao-leads';
import MarketingDigital from '@/sections/marketing-digital';
import MidiaPage from '@/sections/midia-page';
import Menu from '@/componentes/menu';
import { useState } from 'react';

export default function MainContext(): JSX.Element {
	//inicia na seção de videos
	const [section, setSection] = useState(4);

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
		sectionContext = <GeracaoLeads />;
		break;
	case 5:
		sectionContext = <MidiaPage />;
		break;
	}
	return (
		<>
			<Menu section={section} setSection={setSection} />
			{sectionContext}
		</>
	);
}
