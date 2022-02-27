import React from 'react';
import s from "./Main.module.css";


export const Main = () => {
    return (
        <div className={s.main}>
                <div className={s.mainContainer}>
                    <div className={s.HomeInfo}>
                        <span className={s.spanText}>Hello There, I'm</span>
                        <h1 className={s.Name}>Pavel Kuharchik</h1>
                        <p className={s.whoIam}>Frontend <b style={{color: "#f9564f"}}>Developer</b></p>
                        <div className={s.CNBlock}>
                            <a className={s.socialNetwork} href="#">f</a>
                            <a className={s.socialNetwork} href="#">t</a>
                            <a className={s.socialNetwork} href="#">in</a>
                            <a className={s.socialNetwork} href="#">@</a>
                        </div>
                    </div>
                    <div className={s.HomeInfoPhoto}/>
                </div>
        </div>
    );
};