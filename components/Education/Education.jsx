import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from '../Education/Education.module.scss'
import css from 'classnames';

const education = [
    {
        title: "King Mongkut's Institute of Technology Ladkrabang",
        subtitle: "Bachelor's Degree",
        detail: "Faculty of Engineering, Major in Computer Engineering, Bangkok, Thailand",
        period: "2018 - 2022",
        gpa: "3.46",
    },
    {
        title: "Triamudomsuksanomklao School",
        subtitle: "High School",
        period: "2012 - 2018",
        detail: "Science-Math program, Bangkok, Thailand",
        gpa: "3.63",
    }
]

export const Education = ({ darkMode }) => {
    return (
        <div className={css(darkMode ? styles.container : styles.lightContainer)}>
            <div className={styles.title}>Education</div>
            <div style={{width:'100%'}}>
                <VerticalTimeline 
                lineColor={darkMode ? "white" : "#fda517"}
                className={styles.timeline}
                >
                    {education.map((ed) =>
                        <VerticalTimelineElement
                            date={ed.period}
                            dateClassName={styles.date}
                            iconStyle={{ background:'#fda517' ,boxShadow:!darkMode &&'0 0 0 4px #fda517,inset 0 0 1px rgba(255,255,255,0.8), 3px 10px 5px rgba(0, 0, 0, 0.1)'}}
                            icon={<div className={styles.timelineIcon}><i className="fa fa-graduation-cap" style={{fontSize:'40px',color:"white"}}></i></div>}
                            contentStyle={{ borderTop: '7px solid #fda517', boxShadow: !darkMode && '0px 0px 12px #cdcdcd' }}
                            key={ed.title}
                        >
                            <h2 className="vertical-timeline-element-title">{ed.title}</h2>
                            <h4 className="vertical-timeline-element-subtitle">{ed.subtitle}</h4>
                            <p>
                                {ed.detail}
                                <br />
                                GPA: {ed.gpa}
                            </p>
                        </VerticalTimelineElement>
                    )}

                </VerticalTimeline>
            </div>
            <div className={styles.footer}>
                <a href="#Skills" className={styles.arrow}>
                    {darkMode ?
                        <img
                            src="/down-arrow.png"
                            width={30}
                            height={30}
                            className={styles.arrowimg}
                        />
                        :
                        <img
                            src="/down-arrow.png"
                            width={30}
                            height={30}
                            className={styles.arrowimg}
                            style={{ filter: "contrast(100)" }}
                        />
                    }
                </a>
            </div>
        </div>
    );
};
