import React from 'react';
import s from "./Skils.module.css";

export const Skills = () => {

    let array = [
        {
            id: 1,
            title: "React",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cum est, natus nemo, nihil odit omnis optio perferendis perspiciatis repudiandae sequi suscipit, veniam. Corporis eius ipsa minus nobis numquam?"
        },
        {
            id: 2,
            title: "Redux",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cum est, natus nemo, nihil odit omnis optio perferendis perspiciatis repudiandae."
        },
        {
            id: 3,
            title: "Jest",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cum est, natus nemo, nihil odit omnis optio perferendis perspiciatis repudiandae sequi suscipit, veniam. "
        },
        {
            id: 4,
            title: "Redux-Thunk",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cum est, natus nemo, nihil odit omnis optio perferendis perspiciatis repudiandae sequi suscipit, veniam. Corporis eius ipsa minus nobis numquam?"
        },
        {
            id: 5,
            title: "Typescript",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cum est, natus nemo, nihil odit omnis optio perferendis perspiciatis repudiandae."
        },
        {
            id: 6,
            title: "Rest API",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cum est, natus nemo, nihil odit omnis optio perferendis perspiciatis repudiandae sequi suscipit, veniam. "
        },
        {
            id: 6,
            title: "Styled Components",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cum est, natus nemo, nihil odit omnis optio perferendis perspiciatis repudiandae sequi suscipit, veniam. "
        },
        {
            id: 6,
            title: "SCSS/HTML",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cum est, natus nemo, nihil odit omnis optio perferendis perspiciatis repudiandae sequi suscipit, veniam. "
        },
        {
            id: 6,
            title: "JavaScript",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cum est, natus nemo, nihil odit omnis optio perferendis perspiciatis repudiandae sequi suscipit, veniam. "
        },
    ];

    return (
        <div className={s.skillsBlock}>
            <div className={s.titleH2}>
                <h2>Skills</h2>
            </div>
            <div className={s.skills}>
                {array.map(el => (
                    <div key={el.id} className={s.skill}>
                        <h3>{el.title}</h3>
                        <span>{el.description}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}