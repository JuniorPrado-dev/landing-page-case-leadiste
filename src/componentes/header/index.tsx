import * as S from './style';
export default function Header(): JSX.Element {
	return (
		<S.HeaderStyled>
			<S.LogoStyled src={'/assets/images/logo.png'} />
		</S.HeaderStyled>
	);
}
