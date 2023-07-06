/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { keyframes } from 'styled-components';

export const HeaderStyled=styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1vw;
    height: 2.5vw;
    //para mobiles
    @media (max-width: 400px) {
        height: 8vw;
    }
`;
export const LogoStyled=styled.div`
    display:flex ;
    align-items: center;
    height: 100%;
`;

//animations
const rotate=keyframes` 

    to {
        transform: rotate(360deg);
    }
`;
export const LogoSymbolStyled=styled.img`
    height: 80%;
    animation: ${rotate} 4s linear infinite  ;
`;
export const LogoTextStyled=styled.img`
    height: 50%;
    margin-left:.5rem;
`;