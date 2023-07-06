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
    //para mobiles
    @media (max-width: 400px) {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-column-gap: 2px;
        grid-row-gap: 2px;
        margin: 0;
        margin-bottom: 0;
        padding-top: 0;
        padding-bottom: 0;
        border-bottom: solid 1px #0084ff;
        
        height: fit-content;
        width: 95vw;
    }
`;
export const MenuItemStyled = styled.div<TPropsPageStyled>`
    border: solid 0.1vw black;
    border-radius: 1vw;
    padding: 0.3vw 0.5vw;
    margin-right: 0.6vw;
    border-radius: 1vw;
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
    //para mobiles
    @media (max-width: 400px) {
        text-align: center;
        border: solid 0.1vw black;
        border-radius: 1vw;
        margin-right: 0;
        padding:1vw 0;
        border-radius: 1vw;

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
    }
`;
export const MenuItemTextStyled = styled.p`
    font-size: 1vw;
    font-weight: 600;
    font-family: var(--font-plusJ-variable);
    //para mobiles
    @media (max-width: 400px) {
        font-size: 3vw;
    }
`;
