import {motion} from 'framer-motion'
export const Trans1 = ({children})=>{
    return(
    <div>
        <motion.div   
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}>
            {children}
        </motion.div>
    </div>
)}

