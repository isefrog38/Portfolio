import React from 'react';
import s from "./GlobalPage.module.css";
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {FreelanceSection} from "./FreelanceSection/FreelanceSection";
import {Project} from "./Project/Project";
import {Contacts} from "./Contacts/Contacts";

export const GlobalPage = () => {
    return (
        <div className={s.page}>
            <Header />
            <Main/>
            <Skills/>
            <FreelanceSection/>
            <Project />
            <Contacts />
        </div>
    );
};