import {motion} from 'framer-motion'
export const Trans2 = ({children})=>{
    return(
    <div>
        <motion.div   
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: -45 }}
          transition={{ duration: 0.5 }}>
            {children}
        </motion.div>
    </div>
)}