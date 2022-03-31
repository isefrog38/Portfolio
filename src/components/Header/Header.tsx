import React from 'react';
import s from "./Header.module.css";
import {Link} from 'react-scroll';

export const Header = () => {

    let itemsMenu = ['Home', 'Skills', 'Freelance', 'Projects', 'Contact']

    return (
        <div className={s.headerParent}>
            <div className={s.headerChild}>
                {itemsMenu.map((el, index) =>
                    <Link
                        key={index}
                        className={s.menuItem}
                        activeClass={s.active}
                        to={el}
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >
                        {el}
                    </Link>
                )}
            </div>
        </div>
    );
};

/*
<ul className="nav navbar-nav">
 <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link></li>
 <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>Test 2</Link></li>
 <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >Test 3</Link></li>
 <li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>Test 4</Link></li>
*/