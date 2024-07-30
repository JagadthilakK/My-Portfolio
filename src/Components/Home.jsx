import { Link } from "react-router-dom"
import styles from "../StyleSheet/Home.module.css"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Trans } from "./TransitionComp/Trans"

export const Home = () =>{
    const menuList = [
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
                        Completed B.E. in Electronics and Communication (2022), specializing in circuit chips. 
                        Transitioned into tech and development, starting as a Frontend Developer with a focus on React.js. 
                        Developed dynamic, responsive web applications and pursued a Full Stack Development course to enhance both frontend and backend skills. 
                        Passionate about creating innovative digital experiences and continuously mastering new technologies...
                        </div>
                    </div>
                    <div className={styles.aboutRefContainer}>
                        <Link className={styles.link} to="/about">Know More</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </Trans>    
    </>
)}