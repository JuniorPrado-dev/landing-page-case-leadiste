import * as S from './style';
import MenuPages from './menu-pages';
import { useState } from 'react';
import Modal from './modal';
import { TPropsLeads } from '@/types';
import CardVideo from './card-video';
export default function GeracaoLeads({videos}:TPropsLeads):JSX.Element{
	//pagina selecionada
	const [page,setPage]=useState(0);
	//video selecionado para modal selecionada
	const [videoModal,setVideoModal]=useState();
	//array de parte dos videos 
	const videosPage=videos.slice(((page)*9),(page+1)*9);
	
	return(
		<S.ContainerStyled>
			<S.VideoListStyled>
				{videosPage.map((video,index)=>{
					return <CardVideo setVideoModal={setVideoModal} key={index} video={video}/>;
				})}
			</S.VideoListStyled>
			<Modal video={videoModal} setVideoModal={setVideoModal}/>
			<MenuPages page={page} setPage={setPage} numberPages={Math.ceil(videos.length/9)}/>
		</S.ContainerStyled>
	);   
}