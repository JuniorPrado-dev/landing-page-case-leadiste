/* eslint-disable @typescript-eslint/no-unused-vars */
import { TPropsPageStyled } from '@/types';
import styled from 'styled-components';

export const SortingStyled = styled.div`
    display: flex;
    width: 65vw;
    margin: 0 auto;
    margin-bottom: 2vw;
    align-items: center;
    justify-content: start;
    padding-top: 3vw;
    padding-bottom: 1vw;
    height: 2.5vw;
    border-bottom: solid 1px #0084ff;
`;

export const SelectStyled = styled.select`
    font-size: 1vw;
    font-weight: 600;
    font-family: var(--font-plusJ-variable);
`;

export const OpitionStyled = styled.option`
    font-size: 1vw;
    font-weight: 600;
    font-family: var(--font-plusJ-variable);
`;
