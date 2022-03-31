import React from 'react';
import s from "./Skils.module.css";
import js from "../../Assets/skills/js.png";
import html from "../../Assets/skills/html.png";
import react from "../../Assets/skills/react.png";
import redux from "../../Assets/skills/icons8-redux-96(@2x).png";
import jest from "../../Assets/skills/jest-icon.svg";
import css from "../../Assets/skills/css.png";
import api from "../../Assets/skills/api.png";
import typeScript from "../../Assets/skills/ts.png";
import styledCopm from "../../Assets/skills/styled-components.png";


export const Skills = () => {

    let array = [
        {
            id: 0,
            title: "HTML",
            image: html,
            description: "Understanding of standardized document markup language, document structure, tags."
        },
        {
            id: 1,
            title: "CSS",
            image: css,
            description: "Understanding cascading style sheets, pseudo-elements, modest knowledge of CSS-based animations and preprocessors."
        },
        {
            id: 8,
            title: "JavaScript",
            image: js,
            description: "Classic JavaScript language, native techniques. Understanding the Basics. "
        },
        {
            id: 2,
            title: "React",
            image: react,
            description: "Development of websites and applications on REACT. Understanding the core libraries of the libraries that REACT works with."
        },
        {
            id: 6,
            title: "Typescript",
            image: typeScript,
            description: ""
        },
        {
            id: 3,
            title: "Redux / Redux-Thunk",
            image: redux,
            description: "."
        },
        {
            id: 4,
            title: "Jest",
            image: jest,
            description: "Various software testing form TDD, Unit tests and StoryBook."
        },
        {
            id: 5,
            title: "Styled Components / Material UI",
            image: styledCopm,
            description: ""
        },
        {
            id: 7,
            title: "Rest API",
            image: api,
            description: ""
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
        <div className={s.skillsBlock} id={'Skills'}>
            <div className={s.titleH2}>
                <h2 className={s.title}>Skills</h2>
            </div>
            <div className={s.skills}>
                {mapingSkills}
            </div>
        </div>
    );
}