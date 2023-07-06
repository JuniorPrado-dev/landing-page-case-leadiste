/* eslint-disable @typescript-eslint/no-unused-vars */
import { TPropsPageStyled } from '@/types';
import styled from 'styled-components';

export const SortingStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: fit-content;
    margin-left: 5.5vw;
    margin-bottom: 2vw;
    padding-top: 3vw;
    padding-bottom: 1vw;
    height: 2.5vw;
    //para mobiles
    @media (max-width: 400px) {
        display: flex;
        align-items: center;
        justify-content: end;
        width: max-content;
        margin-left: 0;
        margin-bottom: 0;
        padding-top: 0;
        padding-bottom: 0;
        height: fit-content;
    }
`;

export const TextSelectStyled = styled.p`
    font-size: 1vw;
    font-weight: 600;
    margin-right: 0.6vw;
    font-family: var(--font-plusJ-variable);
    //para mobiles
    @media (max-width: 400px) {
         display: none;
    }
`;
export const SelectStyled = styled.select`
    font-size: 1vw;
    font-weight: 600;
    padding: 0.5vw;
    font-family: var(--font-plusJ-variable);
    border-radius: 0.5vw;
    //para mobiles
    @media (max-width: 400px) {
        font-size: 3vw;
        font-weight: 600;
        padding: 0;
        font-family: var(--font-plusJ-variable);
        border-radius: 0.5vw;
        width: 100%;
    }
`;

export const OptionStyled = styled.option`
    padding: 1vw;
    font-weight: 600;
    font-family: var(--font-plusJ-variable);
    //para mobiles
    @media (max-width: 400px) {
         padding: 3vw;
         font-weight: 600;
         font-family: var(--font-plusJ-variable);
    }
`;
