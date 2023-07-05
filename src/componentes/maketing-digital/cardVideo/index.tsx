import { TPropsCardVideo } from '@/types';
import * as S from './style';
import * as F from '@/fonts';
export default function CardVideo({title,url}:TPropsCardVideo):JSX.Element{
	return(
		<S.CardVideoStyled>
			<S.BoxVideoStyled>
				<S.BoxSelectVideoStyled>
					<S.IconPlayStyled src='/assets/images/icon-paly.svg'/>
				</S.BoxSelectVideoStyled>
				<S.VideoStyled src={`${url}?controls=0`} ></S.VideoStyled>
			</S.BoxVideoStyled>
			<S.TitleVideoStyled className={F.plusVariable.variable}>{title}</S.TitleVideoStyled>
		</S.CardVideoStyled>
	);
}