import React, {FC, useState} from 'react';
import s from "./Burger.module.css";
import {Link} from "react-scroll";

type BurgerType = {
    state: string[]
}

export const Burger = ({state}: BurgerType) => {

    const [showBurger, setShowBurger] = useState<boolean>(false);

    return (
         <div className={s.headerParent}>
             {showBurger
                 ? <BurgerOn showBurger={showBurger} setShowBurger={setShowBurger} state={state}/>
                 : <BurgerOff showBurger={showBurger} setShowBurger={setShowBurger} />
             }
         </div>
    );
};


type BurgerOnType = {
    setShowBurger: (show :boolean) => void
    showBurger: boolean
    state: string[]
}


const BurgerOn: FC<BurgerOnType> = ({setShowBurger, showBurger, state}) => {

    const menuItems = state.map(el => (
        <Link
            key={el}
            className={s.item}
            activeClass={s.active}
            to={el}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setShowBurger(!showBurger)}
        >
            <div className={s.item_div}>
                <div className={s.item_color_button}>{el}</div>
            </div>
        </Link>
));


    return (
        <div className={s.two_block} onClick={() => setShowBurger(!showBurger)} onBlur={() => setShowBurger(!showBurger)}>
            <div className={s.two_block_two}>
                         <span className={s.spanOpenInvisible}/>
            </div>
            <div className={s.block_burger_menu}>
                <div className={s.menu_items}>
                    {menuItems}  {/* items*/}
                </div>
            </div>
        </div>
    )
}

type BurgerOffType = {
    setShowBurger: (show :boolean) => void
    showBurger: boolean
}

const BurgerOff: FC<BurgerOffType> = ({setShowBurger, showBurger}) => {

    return (
        <div onClick={() => setShowBurger(!showBurger)} className={s.one_block}>
            <span onClick={() => setShowBurger(!showBurger)} className={s.spanClosedInvisible}/>
        </div>
    )
}