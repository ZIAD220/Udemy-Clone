import React from 'react'
import styles from './styles/Learn.module.css'
import mark from './images/checkmark.png'

function Learn(props) {
  const {overview} = props;  
  return (
    <>
        <br></br>
        <div className={styles.learnBox}>
            <h2>What you’ll learn</h2>
            <br></br>
            <ul className={styles.learnList}>
                {
                    overview.map((learned) => 
                        <li>
                            <img src={mark} className={styles.icons}></img>
                            <p>{learned}</p>
                        </li>
                    )
                }
            </ul>
        </div>
        <br></br>
    </>
  )
}

export default Learn