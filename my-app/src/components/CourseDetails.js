import React from 'react'
import styles from './styles/CourseDetails.module.css'
import rateImg from './images/rate.png'
import mark from './images/exclamation mark.png'
import lang from './images/lang.png'
import cc from './images/cc.png'

function CourseDetails(props) {
  const {title, headline, rate, ratingCount, enrollCount, image, instructors, lastUpdate, globe, Captioning} = props;
  return (
    <div className={styles.box} id="courseDetails">
        <h5><a>Development</a> {">"} <a>Programming Languages</a> {">"} <a>Python</a></h5>
        <br></br>
        <h1>{title}</h1>
        <br></br>
        <p className={styles.headline}>{headline}</p>
        <br></br>
        <span>
            <p className={styles.rateNumber}>{rate}</p> <img className={styles.rate} src={rateImg}></img>
            <a> ({ratingCount} ratings) </a> {enrollCount} students
        </span>
        <br></br>
        <br></br>
        <p>Created by <a>{instructors}</a></p>
        <br></br>
        <ul className={styles.updates}>
            <li><img src={mark} className={styles.icons}></img></li>
            <li><p>Last updated {lastUpdate} </p></li>
            <li><img src={lang} className={styles.icons}></img></li>
            <li><p>{globe}</p></li>
            <li><img src={cc} className={styles.icons}></img></li>
            <li><p>{Captioning}</p></li>
        </ul>
    </div>
  )
}

export default CourseDetails