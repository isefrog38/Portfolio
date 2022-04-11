import React from 'react';
import s from "./Project.module.css";

export const Project = () => {

    let arrayProject = [
        {
            id: 1,
            title: "Todolist",
            image: '',
            showCode: 'https://github.com/isefrog38/Doggy_TodoList_IT_INC',
            showSite: 'https://isefrog38.github.io/Doggy_TodoList_IT_INC/',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eius ipsa minus nobis numquam?"
        },
        {
            id: 2,
            image: '',
            title: "Social Network",
            showCode: 'https://github.com/isefrog38/Social_network',
            showSite: 'https://isefrog38.github.io/Social_network/',
            description: "Lorem ipsum dolor sit amferendis perspiciatis repudiandae."
        },
        {
            id: 3,
            image: '',
            title: "Travel Site",
            showCode: '',
            showSite: '',
            description: "Lorem ipsum dolor sit amferendis perspiciatis repudiandae."
        },
    ];

    const mapingProject = arrayProject.map(pr =>
        <div key={pr.id * 15} className={s.oneProject}>
            <div className={s.imgBlock}>
                <div className={s.img}>IMG</div>
            </div>
            <div className={s.titleAndDescription}>
                <h5>{pr.title}</h5>
                <span>{pr.description}</span>
            </div>
            <div className={s.button_div}>
                <a href={pr.showSite}><button className={s.button}>Demo</button></a>
                <a href={pr.showCode}><button className={s.button}>Show Code</button></a>
            </div>
        </div>
    );

    return (
        <div className={s.mainBlockProject} id={'Projects'}>
            <div className={s.position_block}>
                <div className={s.allProjectsBlock}>
                    <div className={s.titleProject}>
                        <h2>Project</h2>
                    </div>
                    <div className={s.projects}>
                        {mapingProject}
                    </div>
                </div>
            </div>
        </div>
    );
}