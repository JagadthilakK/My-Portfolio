import styles from "../StyleSheet/About.module.css"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { LineComponent } from "./LineComponent"
import { IconComp } from "./IconCom"
import { Trans } from "./TransitionComp/Trans"

export const About = () =>{
    const menuList = [
        { name: 'Home', path: '/' },
        { name: 'Experience', path: '/experience'},
        { name: 'Projects', path: '/project' },
        { name: 'Contact', path: '/contact' }
    ]  
    const details = [
        {name:"Name" , val:"Jagadthilak"},
        {name:"Age",val:"23"},
        {name:"Languages",val:"English, Tamil"},
        {name:"Address",val:"Adyar,Chennai"},
        {name:"Phone",val:"+91 9566230105"},
        {name:"Email",val:"jagadthilak00@gmail.com"},
        {name:"Discord",val:"jagadthilak"}
    ]
    const languages=[{name:"HTML",address:require("../Icons/html.png")},{name:"CSS",address:require("../Icons/css.png")},{name:"JavaScript",address:require("../Icons/javascript.png")},{name:"Java",address:require("../Icons/java.png")},{name:"DSA",address:require("../Icons/dsa.png")}]
    const frameworks=[{name:"React Js",address:require("../Icons/react.png")},{name:"Spring Boot",address:require("../Icons/spring.png")},{name:"React Native",address:require("../Icons/react.png")}]
    const tools=[{name:"VSCode",address:require("../Icons/vscode.png")},{name:"Git",address:require("../Icons/github.png")},{name:"Postman",address:require("../Icons/postman.png")},{name:"Ecplise",address:require("../Icons/eclipse.png")}]
    const database = [{name:"SQL",address:require("../Icons/sql.png")}]
    return(
    <>
        <Trans>
            <div className={styles.headContainer}>
                <Header list={menuList} name="ABOUT & SKILLS"/>    
            </div>
            <div className={styles.bodyContainer}>
                <div className={styles.detailsContainer}>
                    <div className={styles.heading}>Personal Info : </div>
                    <div className={styles.aboutContainer}>
                        {details.map((item,index)=>(
                            <div className={styles.labelContainer} key={index}>{item.name} : <span className={styles.value}>{item.val}</span></div>
                        ))}
                    </div>
                </div>
                <LineComponent name={"Scroll down"}/>
                <div className={styles.skillsContainer}>
                    <div className={styles.heading}>My Skills : </div>
                    <div className={styles.content}>
                        <div className={styles.contentRow}>
                            <div className={styles.contentRowHead}>Language</div>
                            <div className={styles.contentRowBody}>
                                {languages.map((item,index)=>(<div className={styles.iconComp}><IconComp address={item.address} name={item.name} key={index}/></div>))}
                            </div>
                        </div>
                        <div className={styles.contentRow}>
                            <div className={styles.contentRowHead}>Framework</div>
                            <div className={styles.contentRowBody}>
                                {frameworks.map((item,index)=><div className={styles.iconComp}><IconComp address={item.address} name={item.name} key={index}/></div>)}  
                            </div>
                        </div>
                        <div className={styles.contentRow}>
                            <div className={styles.contentRowHead}>Tools</div>
                            <div className={styles.contentRowBody}>
                                {tools.map((item,index)=><div className={styles.iconComp}><IconComp address={item.address} name={item.name} key={index}/></div>)}
                            </div>
                        </div>
                        <div className={styles.contentRow}>
                            <div className={styles.contentRowHead}>Database</div>
                            <div className={styles.contentRowBody}>
                                {database.map((item,index)=><div className={styles.iconComp}><IconComp address={item.address} name={item.name} key={index}/></div>)}
                            </div>
                        </div>
                    </div>
                </div>
                <LineComponent name={"Links"}/>
                <div className={styles.resumeContainer}>
                    <a href="www.youtube.com" rel="noreferrer" className={styles.resumeLink}> Click for Resume </a>
                    <a href="https://github.com/JagadthilakK" target="_blank" rel="noreferrer" className={styles.resumeLink}> Click for GitHub Profile </a>    
                    <a href="https://leetcode.com/u/Jagadthilak/" target="_blank" rel="noreferrer" className={styles.resumeLink}> Click for LeetCode Profile </a>
                </div>
            </div>
            <Footer />
        </Trans>    
    </>
)}