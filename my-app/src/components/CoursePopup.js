import React from 'react'
import mark from './images/checkmark.png'
import heart from './images/heart.png'
import styles from './styles/CoursePopup.module.css'

function CoursePopup(props) {
    const{title, id, lastUpdate, totalLength, Introduction, overview} = props;
    let months = ["", 
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let date = lastUpdate.split('/');

  return (
    <div className={styles.popup} id={`popup${id}`}>
        <h3>{title}</h3>
        <p className={styles.updates}>Updated <b>{months[date[0]]} {date[1]}</b></p>
        <p className={styles.duration}>{totalLength} total hoursAll Levels . Subtitles</p>
        <p className={styles.intro}>{Introduction}</p>
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
        <br></br>
        <div className={styles.popupButtons}>
            <button className={styles.addCart}>Add to cart</button>
            <img src={heart} id={styles["love"]}></img>
        </div>
    </div>
  )
}

export default CoursePopup