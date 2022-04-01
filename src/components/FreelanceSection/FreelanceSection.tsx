import React from 'react';
import s from "./FreelanceSection.module.css";
import {Link} from "react-scroll";

export const FreelanceSection = () => {
    return (
        <div className={s.allFreelanceBlock} id={'Freelance'}>
            <span className={s.titleFreelance}>I Am Available For Freelance</span>
            <Link
                to={'Contact'}
                className={s.Link}
                activeClass={s.active}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
            >
                <div className={s.buttonContact}>Hire Me Now</div>
            </Link>
        </div>
    );
};