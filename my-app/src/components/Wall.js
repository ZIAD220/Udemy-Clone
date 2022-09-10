import React from 'react'
import styles from './styles/Wall.module.css'
import Note from './Note.js'
import girl from './images/girl.png'

function Wall() {
  return (
    <>
    <br></br>
    <div className={styles.wall}>
        <Note></Note>
        <img src={girl} alt="get started" className={styles.getStarted}></img>
    </div>
    <div className={styles.smallWall}>
        <img src={girl} alt="get started" className={styles.getStarted}></img>
        <Note></Note>
    </div>
    </>
  )
}

export default Wall