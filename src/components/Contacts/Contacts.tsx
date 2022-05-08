import React, {useState} from 'react';
import s from "./Contacts.module.css";
import { Zoom } from "react-awesome-reveal";
import {ContactAPI} from "../../API/Contact-API";
import {useFormik} from "formik";
import {Snackbar} from "../SnackBar";

type FormikErrorType = {
    name?: string
    email?: string
    numberPhone?: string
    comment?: string
}

export const Contacts = () => {

    const [message, setMessage] = useState<string | null>(null);

    const loginForm = useFormik({
        initialValues: {name: "", email: "", numberPhone: "", comment: ""},
        validate: (values: FormikErrorType) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = "Field is required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }
            if (!values.name) {
                errors.name = "Name is required";
            }
            if (!values.numberPhone) {
                errors.numberPhone = "Subject is required";
            } else if (values.numberPhone.length > 13) {
                errors.numberPhone = "Subject is required";
            }
            if (!values.comment) {
                errors.comment = "Comment is required";
            }
            return errors;
        },
        onSubmit: (values) => {
            ContactAPI.contactForm(values)
            loginForm.resetForm();
            setMessage(`Thank you ${values.name} for your time. I will definitely contact you as soon as possible.`);
        },
    });

    return (
        <div className={s.mainBlockContact} id={'Contact'}>
            <Snackbar message={message} setMessage={setMessage}/>
            <Zoom>
                <div className={s.blockContact}>
                    <h2 className={s.title}>Contact</h2>
                    <div className={s.allInputsBlock}>
                        <div className={s.inputsBlockSmall}>
                            <h5 style={{fontWeight: "700", fontSize: "1.5rem", margin: "0"}}>Say hello</h5>
                            <form className={s.form} onSubmit={loginForm.handleSubmit}>
                                <div className={s.col6}>
                                    <div className={s.inputLeft}>
                                        <label>Name (required)</label>
                                        <input type={"text"}
                                               className={loginForm.touched.name && loginForm.errors.name ? s.input_error : s.input_name}
                                               placeholder={"Full name"}
                                               id={"name"}
                                               required
                                               {...loginForm.getFieldProps("name")}/>
                                    </div>
                                    <div className={s.inputLeft}>
                                        <label>Email (required)</label>
                                        <input type={"email"}
                                               className={loginForm.touched.email && loginForm.errors.email ? s.input_error : s.input_email}
                                               placeholder={"Email address"}
                                               required
                                               id="email"
                                               {...loginForm.getFieldProps("email")}/>

                                    </div>
                                    <div className={s.inputLeft}>
                                        <label>Phone Number (required)</label>
                                        <input type={"text"}
                                               className={loginForm.touched.numberPhone && loginForm.errors.numberPhone ? s.input_error : s.input_subject}
                                               placeholder={"Phone Number"}
                                               id={"numberPhone"}
                                               required
                                               {...loginForm.getFieldProps("numberPhone")}/>
                                    </div>
                                </div>
                                <div className={s.col6}>
                                    <label>Comment (required)</label>
                                    <textarea rows={10}
                                              className={loginForm.touched.comment && loginForm.errors.comment ? s.textArea_error : s.textArea}
                                              placeholder={"Type Comment"}
                                              id={"comment"}
                                              required
                                              {...loginForm.getFieldProps("comment")}/>
                                </div>
                                <div className={s.col12}>
                                    <button className={s.button} type={"submit"}>Contact Us</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};
