import React from 'react'
import styles from './button.module.css'
const ButtonContainer = ({buttonOnClick}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button className={styles.button} onClick={()=> buttonOnClick(buttonName)}>{buttonName}</button>
      ))}
    </div>
  );
}

export default ButtonContainer