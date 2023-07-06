import { TPropsCardVideo } from '@/types';
import * as S from './style';
import * as F from '@/fonts';
export default function CardVideo({video,setVideoModal}:TPropsCardVideo):JSX.Element{
	return(
		<S.CardVideoStyled>
			<S.BoxVideoStyled onClick={()=>{setVideoModal(video);}}>
				<S.BoxSelectVideoStyled>
					<S.IconPlayStyled src='/assets/images/icon-paly.svg'/>
				</S.BoxSelectVideoStyled>
				<S.VideoStyled src={`${video.url}?controls=0`} ></S.VideoStyled>
			</S.BoxVideoStyled>
			<S.TitleVideoStyled className={F.plusVariable.variable}>{video.title}</S.TitleVideoStyled>
		</S.CardVideoStyled>
	);
}