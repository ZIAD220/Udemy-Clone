import React from 'react'
import styles from './styles/CourseDetails.module.css'
import rate from './images/rate.png'
import mark from './images/exclamation mark.png'
import lang from './images/lang.png'
import cc from './images/cc.png'

function CourseDetails() {
  return (
    <div className={styles.box}>
        <h5><a>Development</a> {">"} <a>Programming Languages</a> {">"} <a>Python</a></h5>
        <br></br>
        <h1>Learn Python: The Complete Python Programming Course</h1>
        <br></br>
        <p>Learn A-Z everything about Python, from the basics, 
            to advanced topics like Python GUI, Python Data Analysis, and more!</p>
        <br></br>
        <span>
            <p>4.4</p> <img className={styles.rate} src={rate}></img>
            <a> (3,242 ratings) </a> 19,668 students
        </span>
        <br></br>
        <br></br>
        <p>Created by <a>Avinash Jain</a>, <a>The Codex</a></p>
        <br></br>
        <ul className={styles.updates}>
            <li><img src={mark} className={styles.icons}></img></li>
            <li><p>Last updated 9/2015 </p></li>
            <li><img src={lang} className={styles.icons}></img></li>
            <li><p>English</p></li>
            <li><img src={cc} className={styles.icons}></img></li>
            <li><p>English</p></li>
        </ul>
    </div>
  )
}

export default CourseDetails