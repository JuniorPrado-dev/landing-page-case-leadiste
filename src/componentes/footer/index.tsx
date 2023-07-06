import * as S from './style';
import * as F from '@/fonts';
export default function Footer(): JSX.Element {
	return (
		<S.ContainerStyled className={F.plusVariable.variable}>
			<S.ImageStyled src='/assets/images/logo.png'/>
			<S.SmallTextStyled>Transformando visitantes em clientes.</S.SmallTextStyled>
		</S.ContainerStyled>
	);
}
