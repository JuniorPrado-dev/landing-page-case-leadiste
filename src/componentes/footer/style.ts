/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

export const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 65vw;
    height: fit-content;
    background-color:#FFFFFF;
    padding: 5vw 0;
    margin:0 auto;
    `;

export const ImageStyled = styled.img`
    width:18vw;
    `;

export const SmallTextStyled = styled.p`
    font-size: 1vw;
    font-weight: 500;
    b{
        font-weight: 800;
    }
    font-family: var(--font-plusJ-variable);
    `;

export const TableLinksStyled = styled.table`
    width: 100%;
    margin-top:2vw;
    font-size: 1.3vw;
    font-weight: 500;
    font-family: var(--font-plusJ-variable);
    `;
export const TrStyled = styled.tr`
    width: 100%;
    font-size: 1.3vw;
    font-weight: 500;
    font-family: var(--font-plusJ-variable);
    `;
export const ThStyled = styled.th`
    font-size: 1.3vw;
    font-weight: 800;
    font-family: var(--font-plusJ-variable);
    `;
export const TdStyled = styled.td`
    a{
        color:black;
        text-decoration: none;
    }
    padding: 0.6VW 2VW ;
    font-size: 1.3vw;
    font-weight: 500;
    font-family: var(--font-plusJ-variable);
    `;
