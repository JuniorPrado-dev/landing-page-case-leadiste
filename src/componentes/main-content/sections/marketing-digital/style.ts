/* eslint-disable @typescript-eslint/no-unused-vars */
import { TPropsPageStyled } from '@/types';
import styled from 'styled-components';

export const ContainerStyled = styled.div`
    display: flex;
    height: max-content;
    width: 65vw;
    margin: 0 auto;
    margin-bottom: 2vw;
    align-items: center;
    justify-content: start;
    padding-top: 3vw;
    padding-bottom: 1vw;
    border-bottom: solid 1px #0084ff;
`;
export const TextStyled = styled.h2`
    width: 100%;
    text-align: center;
    color: red;
    text-transform: uppercase;
    font-size: 2vw;
    font-weight: 600;
    font-family: var(--font-plusJ-variable);
    //para mobiles
    @media (max-width: 400px) {        
        font-size: 3vw;
    }
`;
