import { useState } from 'react';
import * as S from './style';
import * as F from '@/fonts';
import { TPropsSorting } from '@/types';

export default function Sorting ({videos,setVideos}:TPropsSorting):JSX.Element{
	//armazebna escolha	
	const [choice, setChoice] = useState('ascendente'); // Estado para armazenar a ordem selecionad
	// Função para reordenar o array com base na seleção
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const sortArray = (e:any) =>{
		setChoice(e.target.value);
		const arrayTemp = [...videos];
		switch(choice){
		case 'name':
			arrayTemp.sort((a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0);
			break;
		case 'date':
			arrayTemp.sort((a, b) => {
				const dateA=new Date(a.date);
				const dateB=new Date(b.date);
				return dateA<dateB?-1:dateA>dateB?1:0;   
			});
			break;
		}
		setVideos(arrayTemp);
	};

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
