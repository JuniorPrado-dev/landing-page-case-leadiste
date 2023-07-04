import * as S from './style';
import * as F from '@/fonts';
export default function Menu(): JSX.Element {
	return (
		<S.MenuStyled>
			<S.MenuItemStyled>
				<S.MenuItemTextStyled className={F.plusVariable.variable}>Agências</S.MenuItemTextStyled>
			</S.MenuItemStyled>
			<S.MenuItemStyled>
				<S.MenuItemTextStyled className={F.plusVariable.variable}>Chatbot</S.MenuItemTextStyled>
			</S.MenuItemStyled>
			<S.MenuItemStyled>
				<S.MenuItemTextStyled className={F.plusVariable.variable}>Marketing Digital</S.MenuItemTextStyled>
			</S.MenuItemStyled>
			<S.MenuItemStyled>
				<S.MenuItemTextStyled className={F.plusVariable.variable}>Geração de Leads</S.MenuItemTextStyled>
			</S.MenuItemStyled>
			<S.MenuItemStyled>
				<S.MenuItemTextStyled className={F.plusVariable.variable}>Midia Page</S.MenuItemTextStyled>
			</S.MenuItemStyled>
		</S.MenuStyled>
	);
}
