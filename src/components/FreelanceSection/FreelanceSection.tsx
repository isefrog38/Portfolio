import React from 'react';
import s from "./FreelanceSection.module.css";
import {Link} from "react-scroll";

export const FreelanceSection = () => {
    return (
        <div className={s.allFreelanceBlock} id={'Freelance'}>
            <span className={s.titleFreelance}>I Am Available For Freelance</span>
            <button className={s.buttonContact} onClick={() => Link}>Hire Me Now</button>
        </div>
    );
};