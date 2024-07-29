import {motion} from 'framer-motion'
export const Trans = ({children})=>{
    return(
    <div>
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: 0.5 }}>
            {children}
        </motion.div>
    </div>
)}