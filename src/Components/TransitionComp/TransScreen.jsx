import { motion } from 'framer-motion';
import styles from "../../StyleSheet/TransScreen.module.css"

export const TransScreen = ({ isTransitioning }) => {
  return (
    <motion.div
      className={styles.slides}
      initial={{ opacity: 0 }}
      animate={{ opacity: isTransitioning ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    />
)}
