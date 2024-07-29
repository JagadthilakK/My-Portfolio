import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Experience } from "./Experience";
import { Project } from "./Project";
import {Route,Routes,useLocation} from "react-router-dom"
import {AnimatePresence} from 'framer-motion'
import { useState,useEffect } from "react";
import {TransScreen} from "../Components/TransitionComp/TransScreen"
export const AnimatingRoutes = () =>{
    const location = useLocation();
    const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timeout = setTimeout(() => setIsTransitioning(false), 800);
    return () => clearTimeout(timeout);
  }, [location]);


    return(
    <>
      <div>
        <TransScreen isTransitioning={isTransitioning}/>
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/project" element={<Project/>}/>
                <Route path="/experience" element={<Experience/>}/>
            </Routes>
        </AnimatePresence>
      </div>
    </>
)}