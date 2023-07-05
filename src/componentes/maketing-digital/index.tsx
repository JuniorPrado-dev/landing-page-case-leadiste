import data from '@/data/data.json';
import { TVideo } from '@/types';
import CardVideo from '../cardVideo';
import * as S from './style';
export default function MarketingDigital(){
	//array de videos
	const videos:TVideo[]=data.videos;
    
	return(
		<S.MarketingStyled>
			{videos.map((v,index)=>{
				return <CardVideo key={index} title={v.title} url={v.url}/>;
			})}
		</S.MarketingStyled>
	);   
}