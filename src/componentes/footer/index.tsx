import Link from 'next/link';
import * as S from './style';
import * as F from '@/fonts';
export default function Footer(): JSX.Element {
	return (
		<S.ContainerStyled className={F.plusVariable.variable}>
			<S.ImageStyled src="/assets/images/logo.png" />
			<S.SmallTextStyled>
        Transformando visitantes em clientes.
			</S.SmallTextStyled>
			<S.TableLinksStyled>
				<thead>
					<S.TrStyled>
						<S.ThStyled>Links Principais</S.ThStyled>
						<S.ThStyled>Cases</S.ThStyled>
						<S.ThStyled>Materiais</S.ThStyled>
						<S.ThStyled>Siga a Leadster</S.ThStyled>
					</S.TrStyled>
				</thead>
				<tbody>
					<S.TrStyled>
						<S.TdStyled><Link href="/">Home</Link></S.TdStyled>
						<S.TdStyled><Link href="">Geração de Leads B2B</Link></S.TdStyled>
						<S.TdStyled><Link href="">Blog</Link></S.TdStyled>
						<S.TdStyled rowSpan={4}>
							<S.ImageStyled src="/assets/images/contatos.png" />
						</S.TdStyled>
					</S.TrStyled>
					<S.TrStyled>
						<S.TdStyled><Link href="">Ferramenta</Link></S.TdStyled>
						<S.TdStyled><Link href="">Geração de Leads em Softwares</Link></S.TdStyled>
						<S.TdStyled><Link href="">Parceria com Agências</Link></S.TdStyled>
					</S.TrStyled>
					<S.TrStyled>
						<S.TdStyled><Link href="">Peços</Link></S.TdStyled>
						<S.TdStyled><Link href="">Geração de Leads em Imobiliária</Link></S.TdStyled>
						<S.TdStyled><Link href="">Guia Definitivo do Marketing</Link></S.TdStyled>
					</S.TrStyled>
					<S.TrStyled>
						<S.TdStyled><Link href="">Contato</Link></S.TdStyled>
						<S.TdStyled><Link href="">Cases de Sucesso</Link></S.TdStyled>
						<S.TdStyled><Link href="">Materiais Gratuitos</Link></S.TdStyled>
					</S.TrStyled>
				</tbody>
			</S.TableLinksStyled>
		</S.ContainerStyled>
	);
}
