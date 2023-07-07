import * as S from './style';
import * as F from '@/fonts';
export default function Business(): JSX.Element {
	return (
		<S.ContainerStyled className={F.plusVariable.variable}>
			<S.ImageStyled alt={'comparativo CTA'} src='/assets/images/comparativo_img_CTA.png'/>
			<S.ContainerVStyled>
				<S.InfoStyled>
					<S.BigTextStyled>Prontos para triplicar sua <b>Geração de Leads?</b> </S.BigTextStyled>
					<S.TextStyled>Criação e ativaçãp em <b>4 minutos</b>.</S.TextStyled>
				</S.InfoStyled>
				<S.ContainerVStyled>
				</S.ContainerVStyled>
				<S.ContainerHStyled>
					<S.ButtonStyled> Ver Demonstração</S.ButtonStyled>
					<S.ImageStyled alt={'selo RD'} src='/assets/images/selo_RD.png'/>
				</S.ContainerHStyled>
				<S.ContainerHStyled>
					<S.SmallImageStyled alt={'sem cartão'} src='/assets/images/no-card-dark.webp'/>
					<S.SmallTextStyled>Não é necessario Cartão de Crédito |</S.SmallTextStyled>
					<S.SmallImageStyled alt={'estrelas de nivel'} src='/assets/images/rating.webp'/>
					<S.SmallTextStyled>4.9/5 média de satisfaçõ </S.SmallTextStyled>
				</S.ContainerHStyled>
			</S.ContainerVStyled>
		</S.ContainerStyled>
	);
}
