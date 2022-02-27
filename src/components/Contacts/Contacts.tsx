import React from 'react';
import s from "./Contacts.module.css";

export const Contacts = () => {
    return (
        <div className={s.mainBlockContact}>
            <div className={s.blockContact}>
                <h3 style={{fontWeight: "800", fontSize: "1.7rem"}}>Contact</h3>
                <div className={s.allInputsBlock}>
                    <div className={s.inputsBlockSmall}>
                        <h5 style={{fontWeight: "700", fontSize: "1.5rem", margin: "0"}}>Say hello</h5>
                        <form className={s.form}>
                            <div className={s.col6}>
                                <div className={s.inputLeft}>
                                    <label>Name (required)</label>
                                    <input type={"text"} className={s.input} placeholder={"Full name"} required/>
                                </div>
                                <div className={s.inputLeft}>
                                    <label>Email (required)</label>
                                    <input type={"text"} className={s.input} placeholder={"Email address"} required/>
                                </div>
                                <div className={s.inputLeft}>
                                    <label>Subject (required)</label>
                                    <input type={"text"} className={s.input} placeholder={"Subject"} required/>
                                </div>
                            </div>
                            <div className={s.col6}>
                                <label>Comment (required)</label>
                                <textarea rows={10} className={s.textArea} placeholder={"Type Comment"} required/>
                            </div>
                            <div className={s.col12}>
                                <button className={s.button}>Contact Us</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
