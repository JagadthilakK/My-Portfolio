import styles from "../StyleSheet/Experience.module.css"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Trans } from "./TransitionComp/Trans"

export const Experience = () =>{
    const menuList = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/project' },
        { name: 'Contact', path: '/contact' }
    ]

    const experiences = [
        {
            date: "July 2023 - Dec 2023",
            title: "Front-End Developing",
            company: "Freelancing",
            description: [
                "Worked in React Js projects based on the provided prototype or demo."
            ]
        },
        {
            date: "Dec 2022 - June 2023",
            title: "Junior Software Developer",
            company: "Digient Technologies",
            description: [
                "I contributed and was a part in project called Groweo, this website was used to create a persionalized ChatBot and online Forms for customer based on thier subscription.",
                "Handled main development of ChatBot,",
                "Used HTML,CSS,Bootstrap,React Js."
            ]
        },
        {
            date: "April 2022 - Nov 2022",
            title: "Trainee Software Developer",
            company: "Digient Technologies",
            description: [
                "I was a part in project IndiaPlays, basically a online gaming platform.",
                "Worked on UI enhancement and did bug fixes,",
                "Used HTML,CSS,React Native."
            ]
        }
      ]

    const education = [
        {
            date:"Jan 2024 - Sep 2024 - (Present)",
            title:"Full Stack Development",
            institution:"Green's Technologies",
            description:[
                "Dedicated Full stack course. Started developing small projects to enhance my skillset,",
                "You can kindly check out my projects section,",
                "And I'm currently mastering my DSA Problem Solving Skill."
            ]
        },
        {
            date: "2018 - 2022",
            title: "Bachelor of Engineering",
            institution: "St . Joseph's College of Engineering",
            description: [
                "Enrolled in BE ECE course, But took a major turn into tech and development and pursuing it passionately."
            ]
        },
        {
            date: "2017 - 2018",
            title: "12th",
            institution: "St. Patrick's Anglo Indian H.S.School",
            description: [
              "Completed 12th grade with 80%,",
              "Demonstrating academic excellence and readiness for higher education endeavors."
            ]
        },
        {
            date: "2015 - 2016",
            title: "10th",
            institution: "St. Patrick's Anglo Indian H.S.School",
            description: [
                "Successfully completed 10th grade, obtaining 95%,",
                "Showcasing a strong foundation in academics."
            ]
        }
      ]
      

    return(
    <>
        <Trans>
        <div className={styles.headContainer}>
            <Header list={menuList} name="EXPERIENCE & EDUCATION"/>
        </div>    
            <div className={styles.bodyContainer}>
                <div className={styles.contentContainer}>
                    <div className={styles.heading}>Experience</div>
                    <div className={styles.currentWork}>Currently pursuing my Full-Stack development course</div>
                    <div className={styles.timeline}>
                        {experiences.map((exp, index) => (
                            <div key={index} className={styles.timelineItem}>
                            <div className={styles.timelineDate}>{exp.date}</div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.timelineTitle}>{exp.title} <span className={styles.timelineCompany}>— {exp.company}</span></h3>
                                <ul className={styles.timelineContent}>
                                {exp.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                                </ul>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.heading}>Education</div>
                    <div className={styles.timeline}>
                        {education.map((exp, index) => (
                            <div key={index} className={styles.timelineItem}>
                            <div className={styles.timelineDate}>{exp.date}</div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.timelineTitle}>{exp.title} <span className={styles.timelineCompany}>— {exp.institution}</span></h3>
                                <ul className={styles.timelineContent}>
                                {exp.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                                </ul>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{paddingTop:"5%"}}/>
            </div>
        <Footer/>
        </Trans>
    </>)
}