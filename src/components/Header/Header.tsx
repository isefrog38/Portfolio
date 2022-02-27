import React, {useState} from 'react';
import s from "./Header.module.css";

export const Header = () => {
    const [active, setActive] = useState(true)

    return (
        <div className={s.headerParent}>
            {active
                ? <span onClick={() => setActive(!active)} className={ s.spanClosedInvisible}/>
                : <span onClick={() => setActive(!active)} className={ s.spanOpenInvisible}/>
            }
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