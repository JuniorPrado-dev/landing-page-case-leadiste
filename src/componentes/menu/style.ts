/* eslint-disable @typescript-eslint/no-unused-vars */
import { TPropsPageStyled } from '@/types';
import styled from 'styled-components';

export const MenuStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    height: 2.5vw;
    width: 65vw;
    margin: 0 auto;
    margin-bottom: 2vw;
    padding-top: 3vw;
    padding-bottom: 1vw;
    border-bottom: solid 1px #0084ff;
`;
export const MenuItemStyled = styled.div<TPropsPageStyled>`
    
    border: solid 0.1vw black;
    border-radius: 1vw;
    padding: 0.3vw 0.5vw;
    margin-right: 0.6vw;
    border-radius: 1vw;
    padding: 0.3vw 0.5vw;
    margin-right: 0.6vw;
    background-color:${props => {
		if (props.selected === props.id) {
			return '#0093FF';
		}
	}} ;
    border-color:${props => {
		if (props.selected === props.id) {
			return '#0093FF';
		}
	}} ;

    &:hover{
        border-color:#0093FF;
        color:#0093FF ;
        cursor: pointer;
    }
    &:active{
        background-color: #0093FF;
        color: white;
    }

    p{
        color:${props => {
		if (props.selected === props.id) {
			return '#FFFFFF';
		}
	}};
    }
`;
export const MenuItemTextStyled = styled.p`
    font-size: 1vw;
    font-weight: 600;
    font-family: var(--font-plusJ-variable);
`;
