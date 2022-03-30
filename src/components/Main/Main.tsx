import React from 'react';
import s from "./Main.module.css";
import twitter from "../Assets/socialIcon/twitter.png";
import Vk from "../Assets/socialIcon/mail.png";
import telegram from "../Assets/socialIcon/telegram.png";
import facebook from "../Assets/socialIcon/facebook.png";
import linkedIn from "../Assets/socialIcon/Linked.png";
import git from "../Assets/socialIcon/git.png";

export const LinkedIn = 'https://www.linkedin.com/in/pashka-kuharchik-74b4b722a/',
     Vkontakte = 'https://vk.com/pashkakyharchik',
     Telegram = 'https://t.me/PashkaKuh',
     Facebook = 'https://www.facebook.com/profile.php?id=100005190454942',
     Twitter = 'https://twitter.com/juk_nevyvojuk',
     Git = 'https://github.com/isefrog38';

export const Main = () => {
    return (
        <div className={s.main}>
                <div className={s.mainContainer}>
                    <div className={s.HomeInfo}>
                        <span className={s.spanText}>Hello There, I'm</span>
                        <h1 className={s.Name}>Pavel Kuharchik</h1>
                        <p className={s.whoIam}>Frontend <b style={{color: "#f9564f"}}>Developer</b></p>
                        <div className={s.CNBlock}>
                            <a href={Facebook}><img className={s.socialNetwork} src={facebook} alt="facebook"/></a>
                            <a href={Twitter}><img className={s.socialNetwork} src={twitter} alt="twitter"/></a>
                            <a href={LinkedIn}><img className={s.socialNetwork} src={linkedIn} alt="linkedIn"/></a>
                            <a href={Telegram}><img className={s.socialNetwork} src={telegram} alt="telegram"/></a>
                            <a href={Vkontakte}><img className={s.socialNetwork} src={Vk} alt="mail"/></a>
                            <a href={Git}><img className={s.socialNetwork} src={git} alt="git"/></a>
                        </div>
                    </div>
                    <div className={s.HomeInfoPhoto}/>
                </div>
        </div>
    );
};