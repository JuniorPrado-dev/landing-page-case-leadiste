import { useEffect, useState } from 'react';
import * as S from './style';
import * as F from '@/fonts';
import { TPropsSorting } from '@/types';

export default function Sorting ({videos,setVideos}:TPropsSorting):JSX.Element{
	//armazebna escolha	
	const [choice, setChoice] = useState('ascendente'); // Estado para armazenar a ordem selecionad
	// Atualiza opção de escolha
	const sortArray = (e:React.ChangeEvent<HTMLSelectElement>) =>{
		setChoice(e.target.value);
	};	
	//atualiza componente
	useEffect(()=>{
		const arrayTemp = [...videos];
		switch(choice){
		case 'name':
			arrayTemp.sort((a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0);
			setVideos(arrayTemp);
			break;
		case 'date':
			arrayTemp.sort((a, b) => {
				const dateA=new Date(a.date);
				const dateB=new Date(b.date);
				setVideos(arrayTemp);
				return dateA<dateB?-1:dateA>dateB?1:0;   
			});
			break;
		}
	},[choice]
	);
	return (
		<S.SortingStyled className={F.plusVariable.variable}>
			<S.TextSelectStyled>Ordernar por</S.TextSelectStyled>
			<S.SelectStyled value={choice} onChange={sortArray}>
				<S.OptionStyled value={''}>Selecionar</S.OptionStyled>
				<S.OptionStyled value={'name'}>Nome</S.OptionStyled>
				<S.OptionStyled value={'date'}>Data de Publicação</S.OptionStyled>
			</S.SelectStyled>
		</S.SortingStyled>
	);
}
