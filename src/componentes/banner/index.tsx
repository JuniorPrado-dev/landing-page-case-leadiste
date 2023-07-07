import * as S from './style';
export default function Banner(): JSX.Element {
	return (
		<S.ContainerStyled>
			<S.ImageTextStyled alt={'Webnar exclusivos. Menos conversinha, mais conversão.'} src='/assets/images/text.svg'/>
		</S.ContainerStyled>
	);
}
