import { Dispatch, SetStateAction } from 'react';

export type TVideo={
    title:string;
    url: string;
    date:string;
}
export type TPropsCardVideo={
    title:string;
    url: string;
}
export type TPropsMenuPage={
    setPage:Dispatch<SetStateAction<number>>;
    page: number;
    numberPages: number;
}
export type TPropsPageStyled={
    selected: number;
    id: number;
}
