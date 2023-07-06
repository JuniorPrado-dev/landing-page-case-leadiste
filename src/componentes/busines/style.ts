/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

export const ContainerStyled=styled.div`
    display: flex;
    background-color:#F0F8FF;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 5vw 0;
    height: fit-content;
`;

export const ImageStyled=styled.img`
    width:40%;
`;
export const InfoStyled=styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 0.2px solid rgba(0,0,0,0.3);
`;

export const BigTextStyled = styled.p`
    font-size: 3vw;
    font-weight: 500;
    b{
        font-weight: 800;
    }
    font-family: var(--font-plusJ-variable);
    `;
export const TextStyled = styled.p`
    font-size: 1.8vw;
    font-weight: 500;
    margin:1.5vw 0;
    b{
        font-weight: 800;
    }
    font-family: var(--font-plusJ-variable);
    `;

export const ContainerVStyled=styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2vw;
    width: 40%;
`;
export const ContainerHStyled=styled.div`
    display: flex;
    align-items:center;
    justify-content: space-around;
    padding:1vw 0;
    width: 100%;
    `;
export const ButtonStyled=styled.button`
    background-color: #0083ff;
    padding:1.5vw ;
    font-size: 1.5vw;
    border-radius: 2vw;
    text-transform: uppercase;
    font-family: var(--font-plusJ-variable);
    color: white;
    &:hover{
        font-size: 1.6vw;
        cursor: pointer;
    }
    `;

export const SmallImageStyled=styled.img`
    height:1.3vw;
`;
export const SmallTextStyled = styled.p`
    font-size: 1vw;
    font-weight: 500;
    b{
        font-weight: 800;
    }
    font-family: var(--font-plusJ-variable);
    `;