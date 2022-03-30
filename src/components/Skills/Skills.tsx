import React from 'react';
import s from "./Skils.module.css";
import js from "../Assets/skills/js.png";
import html from "../Assets/skills/html.png";
import react from "../Assets/skills/react.png";
import redux from "../Assets/skills/redux.jpg";
import jest from "../Assets/skills/jest.png";
import css from "../Assets/skills/css.png";
import api from "../Assets/skills/api.png";
import typeScript from "../Assets/skills/ts.png";
import styledCopm from "../Assets/skills/stuledComp.png";


export const Skills = () => {

    let array = [
        {
            id: 0,
            title: "HTML",
            image: html,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cum est, natus nemo, nihil odit omnis optio perferendis perspiciatis repudiandae sequi suscipit, veniam. "
        },
        {
            id: 1,
            title: "CSS",
            image: css,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cum est, natus nemo, nihil odit omnis optio perferendis perspiciatis repudiandae sequi suscipit, veniam. "
        },
        {
            id: 8,
            title: "JavaScript",
            image: js,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cum est, natus nemo, nihil odit omnis optio perferendis perspiciatis repudiandae sequi suscipit, veniam. "
        },
        {
            id: 2,
            title: "React",
            image: react,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cum est, natus nemo, nihil odit omnis optio perferendis perspiciatis repudiandae sequi suscipit, veniam. Corporis eius ipsa minus nobis numquam?"
        },
        {
            id: 6,
            title: "Typescript",
            image: typeScript,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cum est, natus nemo, nihil odit omnis optio perferendis perspiciatis repudiandae."
        },
        {
            id: 3,
            title: "Redux/ Redux-Thunk",
            image: redux,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cum est, natus nemo, nihil odit omnis optio perferendis perspiciatis repudiandae."
        },
        {
            id: 4,
            title: "Jest",
            image: jest,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cum est, natus nemo, nihil odit omnis optio perferendis perspiciatis repudiandae sequi suscipit, veniam. "
        },
        {
            id: 5,
            title: "Styled Components",
            image: styledCopm,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cum est, natus nemo, nihil odit omnis optio perferendis perspiciatis repudiandae sequi suscipit, veniam. Corporis eius ipsa minus nobis numquam?"
        },
        {
            id: 7,
            title: "Rest API",
            image: api,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cum est, natus nemo, nihil odit omnis optio perferendis perspiciatis repudiandae sequi suscipit, veniam. "
        },
    ];

    const mapingSkills = array.map(el => (
        <div key={el.id} className={s.skill}>
            <div className={s.divJpg}><img className={s.img_skills} src={el.image} alt={el.title}/></div>
            <h3>{el.title}</h3>
            <span>{el.description}</span>
        </div>
        )
    );

    return (
        <div className={s.skillsBlock}>
            <div className={s.titleH2}>
                <h2>Skills</h2>
            </div>
            <div className={s.skills}>
                {mapingSkills}
            </div>
        </div>
    );
}