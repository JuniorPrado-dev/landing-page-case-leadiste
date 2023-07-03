import * as S from './style';
import imageLogo from '../../../public/assets/images/logo.png';
import Image from 'next/image';
export default function Header():JSX.Element{
	return(
		<S.HeaderStyled>
			<Image alt='logo leadste' src={imageLogo}/>
		</S.HeaderStyled>
	);
}