import React from 'react'
import styles from './display.module.css'
const Display = ({DispValue}) => {
    return <input className={styles.display}  value = {DispValue} type="text" readOnly />;
}

export default Display