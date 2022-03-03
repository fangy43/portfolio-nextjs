import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from '../Projects/Projects.module.scss'
import { ProjectCard } from './ProjectCard'
import { OtherCard } from './OtherCard'
import css from 'classnames'

const cardList = [
    {
        title: "Educa",
        img: "https://github.com/educa-kmitl/educa-frontend/raw/master/src/img/git-cover.jpg",
        description: "Learning Platform web application for Software Development Process subject at KMITL. Front-end development by ReactJS",
        period: "2/2020 - 5/2020",
        link: "https://github.com/educa-kmitl"
    },
    {
        title: "OBED",
        img: "https://avatars.githubusercontent.com/u/88311910?s=400&u=f0da12dafbe9057b8f77912b9da1939e2fadb2e2&v=4",
        description: "Outcome-based Learning Management System Project, The final year project at KMITL. Front-end development by React and Ant Design",
        period: "8/2021 - Present",
        link: "https://github.com/obed-kmitl"
    }
]

const ghexclude = [
    "fangy43",
    "fangy43.github.io",
    "Dragon-Revenge"
]

export const Projects = ({darkMode}) => {
    const [githubRepos, setGithubRepos] = useState([])
    const fetchRepos = async () => {
        return await axios.get(`https://api.github.com/users/fangy43/repos`)
            .then(res => {
                const ghData = res.data
                ghexclude.forEach(exc => {
                    ghData = ghData.filter((e) => e.name !== exc)
                });
                setGithubRepos(ghData);
            })
    }

    useEffect(() => {
        fetchRepos()
    }, [])

    return (
        <div className={css(darkMode ? styles.container : styles.lightContainer)}>
            <div className={styles.title}>Projects</div>
            <div className={styles.featured}>
                <div className={styles.subtitle}>Featured</div>
                {cardList.map((project,index) =>
                    <ProjectCard project={project} key={index} darkMode={darkMode} index={index}/>
                )}
            </div>
            <div className={styles.other}>
                <div className={styles.subtitle}>Others</div>
                <div className={styles.otherList}>
                    {githubRepos.map((project,index) =>
                        <OtherCard project={project} key={index} darkMode={darkMode}/>
                    )}
                </div>
            </div>
        </div>
    )
}
