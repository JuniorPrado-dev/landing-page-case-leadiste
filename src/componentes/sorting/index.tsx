import * as S from './style';
import * as F from '@/fonts';
export default function Sorting ():JSX.Element{
	import React, { useState } from 'react';
	const MeuComponente = () => {
		const [ordem, setOrdem] = useState('ascendente'); // Estado para armazenar a ordem selecionada
		const [meuArray, setMeuArray] = useState([
			{ id: 1, data: '2023-07-01' },
			{ id: 2, data: '2023-06-15' },
			{ id: 3, data: '2023-07-05' },
		]); // Estado para armazenar o array de objetos

		// Função para reordenar o array com base na seleção
		const ordenarArray = (event) => {
			const novaOrdem = event.target.value;
			setOrdem(novaOrdem);

			const novoArray = [...meuArray];

			if (novaOrdem === 'ascendente') {
				novoArray.sort((a, b) => new Date(a.data) - new Date(b.data));
			} else if (novaOrdem === 'descendente') {
				novoArray.sort((a, b) => new Date(b.data) - new Date(a.data));
			}

			setMeuArray(novoArray);
		};

		return (
			<div>
				<select value={ordem} onChange={ordenarArray}>
					<option value="ascendente">Ordem Ascendente</option>
					<option value="descendente">Ordem Descendente</option>
				</select>

				<ul>
					{meuArray.map((objeto) => (
						<li key={objeto.id}>{objeto.data}</li>
					))}
				</ul>
			</div>
		);
	};

	export default MeuComponente;

	return (
		<S.SortingStyled className={F.plusVariable.variable}>
			<S.TextSelectStyled>Ordernar por</S.TextSelectStyled>
			<S.SelectStyled>
				<S.OptionStyled>Selecionar</S.OptionStyled>
				<S.OptionStyled>Nome</S.OptionStyled>
				<S.OptionStyled>Data de Publicação</S.OptionStyled>
			</S.SelectStyled>
		</S.SortingStyled>
	);
}
