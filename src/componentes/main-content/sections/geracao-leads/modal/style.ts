/* eslint-disable @typescript-eslint/no-unused-vars */
import {TPropsModalStyled } from '@/types';
import styled from 'styled-components';

export const ModalVStyled=styled.div<TPropsModalStyled>`
    display: ${props=>props.video?'flex':'none'};
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top:${props=>props.scrollY}px;
    height: 100vh;
    width: 100vw;
    background-color:rgba(0,0,0,0.5) ;
    z-index: 2;
`;
export const CardVideoStyled=styled.div`
    position: absolute;
    top:8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    z-index: 3;
    width: 35%;
    height: 80%;
    background-color: white;
    border-radius: 0.6vw;
    padding: 1% 0;
    `;

export const VideoStyled=styled.iframe`
    height:50%;
    width: 100%;
    `;

export const TitleModalStyled=styled.h1`
    text-align: justify;
    width: 80%;
    font-size:1.6vw;
    font-weight: 600;
    font-family: var(--font-plusJ-variable);
    span{
        color:#0084ff;
    }
`;

export const TitleInfoStyled=styled.h2`
    font-size: 1vw;
    width: 90%;
    font-weight: bolder;
    font-family: var(--font-plusJ-variable);
    border-bottom: 0.2px solid rgba(0,0,0,0.3);
    `;
export const TextInfoStyled=styled.p`
    text-align: justify;
    width: 90%;
    font-size: 0.9VW;
    font-weight: 600;
    font-family: var(--font-plusJ-variable);
`;
export const ImageDownloadsStyled=styled.img`
    width: 85%;
    &:hover{
        cursor: pointer;
    }
`;