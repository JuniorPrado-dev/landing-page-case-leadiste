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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 3;
    
    background-color: white;
    width: 35%;
    height: 70%;
    transition-duration: 0.5s;
    border-radius: 0.6vw;
`;

export const VideoStyled=styled.iframe`
    /* position: relative; */
    height:50%;
    width: 100%;
`;

export const TitleModal=styled.p`
    font-size: 1vw;
    font-weight: 600;
    padding:1vw;
    font-family: var(--font-plusJ-variable);
    span{
                
    }
`;