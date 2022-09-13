import React from 'react'
import './styles/Wall.css'
import Note from './Note.js'
import girl from './images/girl.png'

function Wall() {
  return (
    <>
    <br></br>
    <div className="wall">
        <Note></Note>
        <img src={girl} alt="get started" className="getStarted"></img>
    </div>
    <div className="smallWall">
        <img src={girl} alt="get started" className="getStarted"></img>
        <Note></Note>
    </div>
    </>
  )
}

export default Wall