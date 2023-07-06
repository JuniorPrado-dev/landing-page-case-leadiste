import { Dispatch, SetStateAction } from 'react';

export type TVideo={
    title:string;
    url: string;
    description:string;
    date:string;
}

export type TPropsCardVideo={
    video:TVideo;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setVideoModal:Dispatch<SetStateAction<any>>;
}

export type TPropsModal={
    video:TVideo|undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setVideoModal:Dispatch<SetStateAction<any>>;
}

export type TPropsModalStyled={
    scrollY:number;
    video:TVideo|undefined;
}

export type TPropsMenu={
    setSection:Dispatch<SetStateAction<number>>;
    section: number;
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

export type TPropsMenuStyled={
    selected: number;
    id: number;
}
