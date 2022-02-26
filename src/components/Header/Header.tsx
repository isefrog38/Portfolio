import React from 'react';
import s from "./Header.module.css";

export const Header = () => {
    return (
        <div className={s.headerParent}>
            <div className={s.headerChild}>
                    <a href="#">Home</a>
                    <a href="#">About Me</a>
                    <a href="#">Skills</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
            </div>
        </div>
    );
};