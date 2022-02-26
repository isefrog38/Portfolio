import React from 'react';
import s from "./Main.module.css";


export const Main = () => {
    return (
        <div className={s.main}>
                <div className={s.mainContainer}>
                    <div className={s.HomeInfo}>
                        <span>Hello There</span>
                        <h1>I am Pavel Kuharchik</h1>
                        <p>Frontend Developer</p>
                    </div>
                    <div className={s.HomeInfoPhoto}></div>
                </div>
        </div>
    );
};