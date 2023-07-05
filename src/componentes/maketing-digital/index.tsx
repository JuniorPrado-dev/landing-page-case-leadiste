import data from '@/data/data.json';
import { TVideo } from '@/types';
import CardVideo from './cardVideo';
import * as S from './style';
import MenuPages from './menu-pages';
import { useState } from 'react';
export default function MarketingDigital(){
	//array de videos
	const videos:TVideo[]=data.videos;
	const [page,setPage]=useState(0);
	const videosPage=videos.slice(((page)*9),(page+1)*9);
	return(
		<S.MarketingStyled>
			<S.VideosMarketingStyled>
				{videosPage.map((v,index)=>{
					return <CardVideo key={index} title={v.title} url={v.url}/>;
				})}
			</S.VideosMarketingStyled>
			<MenuPages page={page} setPage={setPage} numberPages={Math.ceil(videos.length/9)}/>
		</S.MarketingStyled>
	);   
}