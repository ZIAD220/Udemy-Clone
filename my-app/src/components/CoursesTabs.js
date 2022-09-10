import React from 'react'
import styles from './styles/CoursesTabs.module.css'

function CoursesTabs() {
  return (
    <div className={styles.courses}>
        <h1>A broad selection of courses</h1><br></br>
        <p>Choose from 185,000 online video courses with new additions published every month</p><br></br>
        <ul>
            <li><b>Python</b></li>
            <li><b>Excel</b></li>
            <li><b>Web Development</b></li>
            <li><b>Javascript</b></li>
            <li><b>Data Science</b></li>
            <li><b>AWS Certification</b></li>
            <li><b>Drawing</b></li>
        </ul>
    </div>
  )
}

export default CoursesTabs