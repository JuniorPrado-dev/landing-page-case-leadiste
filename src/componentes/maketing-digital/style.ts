/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

export const MarketingStyled=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2vw 0;
    width: 65vw;
    margin: 2vw auto;
`;
export const VideosMarketingStyled=styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-column-gap: 2vw;
    grid-row-gap: 4vw;
    padding: 2vw 0;
    height: fit-content;
    width: 100%;
    border-bottom: solid 1px #0084ff;
`;
