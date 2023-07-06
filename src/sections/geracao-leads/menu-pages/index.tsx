import { TPropsMenuPage } from '@/types';
import * as S from './style';
import * as F from '@/fonts';

export default function MenuPages({page,setPage,numberPages}:TPropsMenuPage):JSX.Element{
	const pagesOptions=()=>{
		const pages=[];
		for (let i=0;i<numberPages;i++){
			pages.push(i);
		}
		return pages;
	};
	return(
		<S.MenuStyled className={F.plusVariable.variable}>
			<S.TextStyled>
            Página
			</S.TextStyled>
			{
				pagesOptions().map((nPage,index)=>{
					return <S.BoxNumberStyled selected={page} id={nPage} key={index} onClick={()=>{setPage(nPage);}}>
						<S.TextNumberStyled>
							{nPage+1}
						</S.TextNumberStyled>
					</S.BoxNumberStyled>;
				})     
			}
		</S.MenuStyled>
	);
}