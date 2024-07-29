import { Link } from "react-router-dom"
import styles from "../StyleSheet/Home.module.css"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Trans } from "./TransitionComp/Trans"

export const Home = () =>{
    const menuList = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Experience', path: '/experience'},
        { name: 'Projects', path: '/project' },
        { name: 'Contact', path: '/contact' }
    ] 

    return(
    <>  
        <Trans>
            <Header list={menuList} name="Jk's PORTFOLIO"/>
            <div className={styles.bodyContainer}>
                <div className={styles.pictureContainer}>
                    <img className={styles.myPic} src={require('../Images/Jk.jpg')} alt="jagadPic"/>
                    <img className={styles.myPicZoomed} src={require('../Images/jkZoom.png')} alt="zoomPic"/>
                </div>
                <div className={styles.detailsContainer}>
                    <div className={styles.lilDetail}>
                        <div className={styles.hiText}>Hi there!</div>
                        <div className={styles.name}>I'm JAGADTHILAK K</div>
                        <div className={styles.altName}>( You can call me JK )</div>
                        <div className={styles.text}>
                            I completed my BE in 2022, My specilzation was Electronics and communication(ECE).<br/>
                            My core was circuit chips and stuff but I got into love with tech & development.<br/>
                            So did a course in full stack
                            Now I'm mastering and playing with it ...!!
                        </div>
                    </div>
                    <div className={styles.aboutRefContainer}>
                        <Link className={styles.link} to="/about">R<br/>e<br/>a<br/>d<br/><br/>M<br/>o<br/>r<br/>e</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </Trans>    
    </>
)}