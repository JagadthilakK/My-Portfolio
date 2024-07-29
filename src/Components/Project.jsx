import styles from "../StyleSheet/Project.module.css"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Trans } from "./TransitionComp/Trans"
import Modal from "react-modal"
import { useState } from "react"

export const Project = () =>{

    const [modalOpen, setmodalOpen] = useState(false);
    const [clickedImage,setClickedImage] = useState(null)

    const menuList = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience'},
    { name: 'Contact', path: '/contact' }
    ] 

    const projects = [
        {id:1,src:require('../Images/ProjectsImages/project3.png'),name:'Brainstrom game',href:"https://match-to-win.netlify.app/"},
        {id:2,src:require('../Images/ProjectsImages/project4.png'),name:'To-Do App',href:"https://to-chore-app.netlify.app/"},
        {id:3,src:require('../Images/ProjectsImages/project5.png'),name:'Advise App',href:"https://get-advise-onclick-button.netlify.app/"},
        {id:4,src:require('../Images/ProjectsImages/project1.png'),name:'My porfolio'},

    ]

    const openModal=(image)=>{
        setmodalOpen(true)
        setClickedImage(image)
    }

    const closeModal=()=>{
        setmodalOpen(false)
    }

    return(
    <>
        <Trans>
            <Header list={menuList} name="PROJECTS IN MY GIT REPO"/>
            <div className={styles.bodyContainer}>
                <h1>Click them for preview : </h1>  
                <div className={styles.gridContainer}>
                    {projects.map(image=>(
                        <div key={image.id} className={styles.gridItem} onClick={()=>openModal(image)}>
                            <img src={image.src} alt={image.name} className={styles.projectImg}/>
                            <p className={styles.projectName}>{image.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            {clickedImage && (
                <Modal isOpen={modalOpen} className={styles.modal} overlayClassName={styles.overlay} onRequestClose={closeModal}>
                    <button onClick={closeModal} className={styles.closeModalButton}>X</button>
                    <h2 className={styles.projectNameInsideModal}>{clickedImage.name}</h2>
                    <img src={clickedImage.src} alt={clickedImage.name} width={"200px"} height={"200px"} className={styles.projectImageInsideModal}/>
                    <a href={clickedImage.href} target="_blank" rel="noreferrer" className={styles.projectsPreviewButton}> Preview Link <img src={require("../Icons/link.png")} alt="linkIcon" className={styles.previewLinkIcon}/></a>
                </Modal>
            )}
            <Footer/>
        </Trans>    
    </>
)}