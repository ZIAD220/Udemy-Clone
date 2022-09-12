import React from 'react'
import styles from './styles/ExploreBox.module.css'
import Courses from './Courses'

function ExploreBox({list}) {
  return (
    <>
      <div className={styles.exploreBox}>
          <h2 id="header">Expand your career opportunities with Python</h2><br></br>
          <p id="description">
              Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. 
              Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. 
              You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...
          </p>
          <br></br>
          <button id="exploreButton"><b>Explore Python</b></button>
          <br></br><br></br>
          <ul id="coursesList">
            <Courses list={list}></Courses>
          </ul>
      </div>
      <br></br>
      <br></br>
    </>
  )
}

export default ExploreBox