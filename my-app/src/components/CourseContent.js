import React from 'react'
import styles from './styles/CourseContent.module.css'
import arrow from './images/arrow.png'
import video from './images/video play.png'

function CourseContent() {
  return (
    <div className={styles.courseContent}>
        <h2>Course content</h2>
        <br></br>
        <div className={styles.duration}>
            <p>15 sections 146 lectures 14h 42m total length</p>
            <a>Expand all sections</a>
        </div>
        <br></br>
        <ul className={styles.contentList}>
            <li>
                <img src={arrow}></img>
                <h3>Up and Running With Python</h3>
                <p>2 lectures 6min</p>
                <br></br>
            </li>
            <li className={styles.contentSubList}>
                <img src={video}></img>
                <h4>Installing Python</h4>
                <p>04:07</p>
                <br></br>
                <img src={video}></img>
                <h4>Hello World</h4>
                <p>01:37</p>
            </li>
        </ul>
    </div>
  )
}

export default CourseContent