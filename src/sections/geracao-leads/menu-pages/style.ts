
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TPropsPageStyled } from '@/types';
import styled from 'styled-components';

export const MenuStyled=styled.div`
    margin-top: 1vw;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3vw;
`;

export const BoxNumberStyled=styled.div<TPropsPageStyled>`
    
    border:0 solid  #0084ff;
    border-width: ${props=>props.id==props.selected?0.2:0}vw;
    height:max-content;
    padding: 0.3vw 0.7vw;
    border-radius: 0.4vw;
    margin:0 0.2vw;
    &:hover{
        border: 0.2vw solid #0084ff;
        cursor: pointer;
    }
`;

export const TextNumberStyled=styled.p`
    font-size: 1.2vw;
    font-weight: 600;
    font-family: var(--font-plusJ-variable);
`;

export const TextStyled=styled.p`
    font-size: 1.5vw;
    font-weight: 600;
    font-family: var(--font-plusJ-variable);
    margin-right: 0.5vw;
`;