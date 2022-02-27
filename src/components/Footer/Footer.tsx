import React from 'react';
import s from "./Footer.module.css";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
                <div className={s.flexBlock}>
                    <div className={s.CNBlock}>
                        <a className={s.socialNetwork} href="#">f</a>
                        <a className={s.socialNetwork} href="#">t</a>
                        <a className={s.socialNetwork} href="#">in</a>
                        <a className={s.socialNetwork} href="#">@</a>
                    </div>
                    <div className={s.textFooter}>
                        <h4 style={{fontSize: "1.5rem", margin: "0"}}>Pavel Kuharchik</h4>
                        <span>© 2022 copyright all right reserved</span>
                    </div>
                </div>
        </div>
    );
};