/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

export const MenuStyled=styled.div`
    display: flex;
    width: 65vw;
    margin: 0 auto;
    align-items: center;
    justify-content: start;
    padding-top: 3vw;
    padding-bottom: 1vw;
    height: 2.5vw;
    border-bottom: solid 1px #0084ff;
`;
export const MenuItemStyled=styled.div`
    border: solid 0.15vw black;
    border-radius: 1vw;
    padding: 0.3vw 0.5vw;
    margin-right: 0.6vw;
    border-radius: 1vw;
    padding: 0.3vw 0.5vw;
    margin-right: 0.6vw;
    &:hover{
        border-color:#0093FF;
        color:#0093FF ;
        cursor: pointer;
    }
    &:active{
        background-color: #0093FF;
        color: white;
    }
`;
export const MenuItemTextStyled=styled.p`
    font-size: 1vw;
    font-weight: 600;
    font-family: var(--font-plusJ-variable);
`;
