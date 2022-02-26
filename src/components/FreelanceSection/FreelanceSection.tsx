import React from 'react';
import s from "./FreelanceSection.module.css";

export const FreelanceSection = () => {
    return (
        <div className={s.allFreelanceBlock}>
            <span className={s.titleFreelance}>I Am Available For Freelance</span>
            <button className={s.buttonContact}>Hire Me Now</button>
        </div>
    );
};