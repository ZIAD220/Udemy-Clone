import React from 'react'
import styles from './styles/Learn.module.css'
import mark from './images/checkmark.png'

function Learn() {
  return (
    <>
        <br></br>
        <div className={styles.learnBox}>
            <h2>What you’ll learn</h2>
            <br></br>
            <ul className={styles.learnList}>
                <li>
                    <img src={mark} className={styles.icons}></img>
                    <p>Create their own Python Programs </p>
                </li>
                <li>
                    <img src={mark} className={styles.icons}></img>
                    <p>Become an experienced Python Programmer</p>
                </li>
                <li>
                    <img src={mark} className={styles.icons}></img>
                    <p>Parse the Web and Create their own Games</p>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Learn