import React from 'react';
import s from "./Footer.module.css";
import facebook from "../Assets/socialIcon/facebook.png";
import twitter from "../Assets/socialIcon/twitter.png";
import linkedIn from "../Assets/socialIcon/Linked.png";
import telegram from "../Assets/socialIcon/telegram.png";
import Vk from "../Assets/socialIcon/mail.png";
import {Facebook, LinkedIn, Telegram, Twitter, Vkontakte} from "../Main/Main";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
                <div className={s.flexBlock}>
                    <div className={s.CNBlock}>
                        <a href={Facebook}><img className={s.socialNetwork} src={facebook} alt="facebook"/></a>
                        <a href={Twitter}><img className={s.socialNetwork} src={twitter} alt="twitter"/></a>
                        <a href={LinkedIn}><img className={s.socialNetwork} src={linkedIn} alt="linkedIn"/></a>
                        <a href={Telegram}><img className={s.socialNetwork} src={telegram} alt="telegram"/></a>
                        <a href={Vkontakte}><img className={s.socialNetwork} src={Vk} alt="mail"/></a>
                    </div>
                    <div className={s.textFooter}>
                        <h4 style={{fontSize: "1.5rem", margin: "0"}}>Pavel Kuharchik</h4>
                        <span>© 2022 copyright all right reserved</span>
                    </div>
                </div>
        </div>
    );
};