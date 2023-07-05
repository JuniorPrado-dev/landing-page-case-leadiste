/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

export const CardVideoStyled=styled.div`
    position: relative;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 1vw;
    width: auto;
    height: auto;
    transition-duration: 0.5s;
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 2px 5px 10px 3px rgba(0, 0, 0, 0.5);
    &:hover{
        height: 110%;
        width: 110%;
    }
`;

export const BoxVideoStyled=styled.div`
    text-align: center;
    position: relative;
    height:max-content;
    width: 100%;
`;
export const VideoStyled=styled.iframe`
    /* position: relative; */
    height:max-content;
    width: 98%;
`;
export const BoxSelectVideoStyled=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    z-index: 1;
    width:100%;
    height:100%;
    background-color: rgba(0, 147, 255,0);
    font-family: var(--font-plusJ-variable);
    transition-duration: 0.5s;
    &:hover{
        background-color: rgba(0, 147, 255,0.6);
        cursor: pointer;
        img{
            opacity: 1;
        }
    }
    `;
export const IconPlayStyled=styled.img`
    height: 45%;
    opacity: 0;
`;
export const TitleVideoStyled=styled.p`
    position: relative;
    font-size: 1vw;
    font-weight: 600;
    padding:1vw;
    font-family: var(--font-plusJ-variable);
`;