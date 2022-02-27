import React from 'react';
import s from "./Header.module.css";

export const Header = () => {
    return (
        <div className={s.headerParent}>
            <div className={s.headerChild}>
                    <a className={s.menuItem} href="#">Home</a>
                    <a className={s.menuItem} href="#">Skills</a>
                    <a className={s.menuItem} href="#">Freelance</a>
                    <a className={s.menuItem} href="#">Projects</a>
                    <a className={s.menuItem} href="#">Contact</a>
            </div>
        </div>
    );
};