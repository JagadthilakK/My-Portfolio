import React from 'react';
import styles from '../StyleSheet/LineComponent.module.css';

export const LineComponent = (props) => {
    return (
        <div className={styles.lineContainer}>
            <div className={styles.lineSection}>
                <div className={styles.line}></div>
            </div>
            <div className={styles.textSection}>
                <div className={styles.text}>{props.name}</div>
            </div>
            <div className={styles.lineSection}>
                <div className={styles.line}></div>
            </div>
        </div>
    );
};
