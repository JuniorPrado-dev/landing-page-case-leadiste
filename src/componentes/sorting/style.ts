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
`;

export const TextSelectStyled = styled.p`
    font-size: 1vw;
    font-weight: 600;
    margin-right: 0.6vw;
    font-family: var(--font-plusJ-variable);
`;
export const SelectStyled = styled.select`
    font-size: 1vw;
    font-weight: 600;
    padding: 0.5vw;
    font-family: var(--font-plusJ-variable);
    border-radius: 0.5vw;
`;

export const OptionStyled = styled.option`
    padding: 1vw;
    font-weight: 600;
    font-family: var(--font-plusJ-variable);
`;
