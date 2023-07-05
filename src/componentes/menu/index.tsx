import { TPropsMenu } from '@/types';
import * as S from './style';
import * as F from '@/fonts';
export default function Menu({section,setSection}:TPropsMenu): JSX.Element {
	return (
		<S.MenuStyled className={F.plusVariable.variable}>
			<S.MenuItemStyled selected={section} id={1} onClick={()=>{setSection(1);}}>
				<S.MenuItemTextStyled>Agências</S.MenuItemTextStyled>
			</S.MenuItemStyled>
			<S.MenuItemStyled selected={section} id={2} onClick={()=>{setSection(2);}}>
				<S.MenuItemTextStyled>Chatbot</S.MenuItemTextStyled>
			</S.MenuItemStyled>
			<S.MenuItemStyled selected={section} id={3} onClick={()=>{setSection(3);}}>
				<S.MenuItemTextStyled>Marketing Digital</S.MenuItemTextStyled>
			</S.MenuItemStyled>
			<S.MenuItemStyled selected={section} id={4} onClick={()=>{setSection(4);}}>
				<S.MenuItemTextStyled>Geração de Leads</S.MenuItemTextStyled>
			</S.MenuItemStyled>
			<S.MenuItemStyled selected={section} id={5} onClick={()=>{setSection(5);}}>
				<S.MenuItemTextStyled>Midia Page</S.MenuItemTextStyled>
			</S.MenuItemStyled>
		</S.MenuStyled>
	);
}
