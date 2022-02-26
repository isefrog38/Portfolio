import React from 'react';
import s from "./GlobalPage.module.css";
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";

export const GlobalPage = () => {
    return (
        <div className={s.page}>
            <Header />
            <Main/>
            <Skills/>
        </div>
    );
};