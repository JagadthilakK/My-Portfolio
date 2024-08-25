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
        {id:1,src:require('../Images/ProjectsImages/project3.png'),preview:true,name:'Brainstrom game',href:"https://match-to-win.netlify.app/",description:"I developed the Brain Strom app to showcase my React skills. It's a picture matching game with two versions: one with dog photos and the other with numbers. Optimized for PCs and tablets, the app uses React.js with hooks to ensure a smooth, responsive experience."},
        {id:2,src:require('../Images/ProjectsImages/project2.png'),preview:true,name:"Health Track Dashboard",href:"https://health-track-dashboard.netlify.app/",description:"During my work on the Health Tracking Dashboard page, I developed a responsive and visually appealing static website optimized for large screens like PCs and laptops. The dashboard features interactive charts for effective health data visualization and boasts a clean, intuitive UI design that enhances the overall user experience. This project was created specifically for a company interview, tailored to meet their requirements for a static site with a polished and perfect UI."},
        {id:3,src:require('../Images/ProjectsImages/project4.png'),preview:true,name:'To-Do App',href:"https://to-chore-app.netlify.app/",description:"I created a Todo app. The app allows users to add and delete tasks with a simple and intuitive interface. Built using React.js, it features a responsive design that works seamlessly across different devices."},
        {id:4,src:require('../Images/ProjectsImages/project6.png'),preview:true,name:'CRUD Operation Page',href:"https://crud-page.netlify.app/",description:"I developed a CRUD functionality application that integrates both frontend and backend components. For the frontend, I used React.js to create a dynamic and user-friendly interface. On the backend, I employed Spring Boot to handle data processing and server-side logic, including API creation and REST API requests and responses. The application uses Oracle SQL for database management, enabling seamless data storage and retrieval. This project showcases a full-stack approach with robust integration between frontend, backend, and database technologies, and effective implementation of RESTful services."},
        {id:5,src:require('../Images/ProjectsImages/project5.png'),preview:true,name:'Advise App',href:"https://get-advise-onclick-button.netlify.app/",description:"A simple webpage designed for fun that retrieves and displays random advice when a button is clicked. The page uses the fetch/Axios API to request data from an example advice API and dynamically updates the content based on the response. This project demonstrates basic API interaction and dynamic content updating in a straightforward and engaging way."},
        {id:6,src:require('../Images/ProjectsImages/project1.png'),name:'My porfolio'},

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
                <div className={styles.previewHeading}>Click them for preview : </div>  
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
                    {clickedImage.preview && <a href={clickedImage.href} target="_blank" rel="noreferrer" className={styles.projectsPreviewButton}> Preview Link <img src={require("../Icons/link.png")} alt="linkIcon" className={styles.previewLinkIcon}/></a>}
                    <p className={styles.projectDescription}>{clickedImage.description}</p>
                </Modal>
            )}
            <Footer/>
        </Trans>    
    </>
)}