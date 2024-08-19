import styles from "../StyleSheet/Contact.module.css"
import { Footer } from "./Footer"
import { Header } from "./Header"
import {Trans} from "../Components/TransitionComp/Trans"
import { useState } from "react"

export const Contact = () =>{
    const [mailMeText,setMailMeText] = useState(false)
    const menuList = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Experience', path: '/experience'},
        { name: 'Projects', path: '/project' },
    ] 

    const onMouseFun=()=>{
        setMailMeText(!mailMeText)

    }

    return(
    <>
        <Trans>
            <Header list={menuList} name="GET IN TOUCH"/>    
            <div className={styles.bodyContainer}>
                <div className={styles.mainContainer}>
                    <div className={styles.heading}>DON'T HESITATE !</div>
                    <div className={styles.text}>Feel free to ping me.<br/>
                        I am always open to discuss about creative ideas or opportunities to be part of your visions.<br/>
                        Currently looking for opportunities to take part in.
                    </div>
                    <div className={styles.mailContainer}>
                        <img src={require("../Icons/gmail.png")} alt="gmail" width={"50px"} height={"50px"} onMouseEnter={onMouseFun} onMouseLeave={onMouseFun}/>➤ 
                        <div className={styles.mailLinkContainer}>
                            <div>{mailMeText && <h1>Mail Me</h1>}</div>
                            <a href="mailto:jagadthilak00@gmail.com" className={!mailMeText ? styles.mailLink : styles.mailLinkHov}>jagadthilak00@gmail.com</a>
                        </div> 
                    </div>
                    <div className={styles.iconContainer}>
                    <div className={styles.iconHeader}>Click to view profiles : </div>
                        <a href="https://github.com/JagadthilakK" target="_blank" rel="noreferrer"><img src={require("../Icons/github.png")} alt="git" className={styles.icon}/></a>
                        <a href="https://www.linkedin.com/in/jagadthilak/" target="_blank" rel="noreferrer"><img src={require("../Icons/linkedin.png")} alt="linkedIn" className={styles.icon}/></a>
                        <a href="https://leetcode.com/u/Jagadthilak/" target="_blank" rel="noreferrer"><img src={require("../Icons/leetcode.png")} className={styles.icon} alt="leet"></img></a>
                    </div>
                </div>
            </div>
            <Footer/>   
        </Trans>            
    </>)
}