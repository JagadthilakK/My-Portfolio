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
                "As a dedicated front-end developer specializing in freelancing projects, I have consistently delivered high-quality, user-centric web applications. My expertise in React.js has allowed me to craft dynamic, responsive, and visually appealing user interfaces that align perfectly with client requirements and enhance user engagement.",
                "• UI/UX Design: Leveraged React.js to create intuitive and responsive user interfaces, ensuring a seamless user experience across different devices and platforms.",
                "• Component Development: Developed reusable and maintainable components, significantly reducing development time and enhancing the overall scalability of projects.",
                "• State Management: Implemented efficient state management solutions using tools like Redux, ensuring consistent and reliable application performance.",
                "• API Integration: Integrated RESTful APIs to provide dynamic data handling and interactivity within applications, enhancing functionality and user engagement.",
                "• Core Technologies: Specialized in React.js, complemented by a solid understanding of HTML, CSS, and JavaScript, enabling me to build robust and efficient front-end solutions.",
                "My role as a front-end freelancing developer has allowed me to work on a diverse range of projects, each time delivering tailored solutions that meet client specifications and exceed their expectations."
            ]
        },
        {
            date: "Dec 2022 - June 2023",
            title: "Junior Software Developer",
            company: "Digient Technologies",
            description: [
                "During my time working on the Groweo project, I led the development of a platform designed to create personalized chatbots and online forms tailored to customers' subscription needs. My key contributions included :",
                "• Core Development: Spearheaded the main development of the chatbot functionality, utilizing React.js and Bootstrap to deliver a seamless and interactive user experience.",
                "• Feature Implementation: Developed essential features that allowed users to customize chatbots and forms to match their unique styling and functional requirements.",
                "• User Experience: Focused on delivering a smooth, responsive design and user-friendly interface, enhancing overall customer satisfaction.",
                "• Core Technologies: Focused on utilizing key technologies such as HTML, Bootstrap and React.js to achieve high-quality results.",
                "My work was crucial in building a platform that offers a highly personalized experience, meeting the diverse needs of Groweo's users."
            ]
        },
        {
            date: "April 2022 - Nov 2022",
            title: "Trainee Software Developer",
            company: "Digient Technologies",
            description: [
                "During my time working on the IndiaPlays project, a leading online gaming platform, I played a pivotal role in enhancing the user interface and resolving critical bugs. My contributions included :",
                "• UI Enhancements: Leveraged HTML, CSS, and React Native to elevate the visual appeal and functionality of the platform, significantly improving user engagement and satisfaction.",
                "• Bug Fixes: Efficiently identified and resolved numerous bugs, ensuring a seamless and smooth gaming experience for thousands of users.",
                "• Core Technologies: Focused on utilizing key technologies such as HTML, CSS, and React Native to achieve high-quality results.",
                "My work was instrumental in delivering a polished, user-friendly interface that met the high standards expected by our growing user base."
            ]
        }
      ]

    const education = [
        {
            date:"Jan 2024 - Sep 2024 - (Present)",
            title:"Full Stack Development",
            institution:"Green's Technologies",
            description:[
                "I'm currently pursuing a comprehensive full-stack development course, which is providing me a solid foundation in both frontend and backend technologies.",
                " Started developing small projects to enhance my skillset, You can kindly check out my projects section,",
                "Additionally, I am currently dedicated to mastering data structures and algorithms (DSA) to further enhance my problem-solving abilities and technical expertise."
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
            title: "Senior Secondary Education",
            institution: "St. Patrick's Anglo Indian H.S.School",
            description: [
              "Completed 12th grade with 80%,",
              "Demonstrating academic excellence and readiness for higher education endeavors."
            ]
        },
        {
            date: "2015 - 2016",
            title: "Secondary Education",
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
                    <div className={styles.currentWork}>Currently looking for new opportunities</div>
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