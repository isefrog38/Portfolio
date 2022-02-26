import React from 'react';
import s from "./Project.module.css";

export const Project = () => {

    let arrayProject = [
        {
            id: 1,
            title: "Todolist",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eius ipsa minus nobis numquam?"
        },
        {
            id: 2,
            title: "Social Network",
            description: "Lorem ipsum dolor sit amferendis perspiciatis repudiandae."
        },
        {
            id: 3,
            title: "Travel Site",
            description: "Lorem ipsum dolor sit amferendis perspiciatis repudiandae."
        },
    ];

    return (
        <div className={s.mainBlockProject}>
            <div className={s.allProjectsBlock}>
                <div className={s.titleProject}>
                    <h2>Project</h2>
                </div>
                <div className={s.projects}>
                    {arrayProject.map(pr =>
                        <div key={pr.id} className={s.oneProject}>
                            <div className={s.imgBlock}>
                                <div className={s.img}>IMG</div>
                            </div>
                            <button className={s.button}>View project</button>
                            <div className={s.titleAndDescription}>
                            <h5>{pr.title}</h5>
                            <span>{pr.description}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}