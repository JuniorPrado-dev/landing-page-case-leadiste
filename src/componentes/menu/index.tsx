import * as S from './style';
import * as F from '@/fonts';
export default function Menu(): JSX.Element {
	return (
		<S.MenuStyled className={F.plusVariable.variable}>
			<S.MenuItemStyled>
				<S.MenuItemTextStyled>Agências</S.MenuItemTextStyled>
			</S.MenuItemStyled>
			<S.MenuItemStyled>
				<S.MenuItemTextStyled>Chatbot</S.MenuItemTextStyled>
			</S.MenuItemStyled>
			<S.MenuItemStyled>
				<S.MenuItemTextStyled>Marketing Digital</S.MenuItemTextStyled>
			</S.MenuItemStyled>
			<S.MenuItemStyled>
				<S.MenuItemTextStyled>Geração de Leads</S.MenuItemTextStyled>
			</S.MenuItemStyled>
			<S.MenuItemStyled>
				<S.MenuItemTextStyled>Midia Page</S.MenuItemTextStyled>
			</S.MenuItemStyled>
		</S.MenuStyled>
	);
}
