import React from 'react'
import CourseContent from './CourseContent'
import CourseDetails from './CourseDetails'
import Description from './Description'
import Footer from './Footer'
import Instructors from './Instructors'
import Learn from './Learn'
import NavBar from './NavBar'
import Requirements from './Requirements'
import Reviews from './Reviews'
import StudentFeedback from './StudentFeedback'
import TopAnnounce from './TopAnnounce'
import {Routes, Route} from 'react-router-dom'

function CoursePage(props) {
  /*
  <StudentFeedback></StudentFeedback>
  */
 return (
   <>
        <TopAnnounce></TopAnnounce>
        <NavBar></NavBar>
        <CourseDetails {...props}></CourseDetails>
        <Learn {...props}></Learn>
        <CourseContent {...props}></CourseContent>
        <Requirements {...props}></Requirements>
        <Description {...props}></Description>
        <Instructors {...props}></Instructors>
        <Reviews {...props}></Reviews>
        <Footer></Footer>
    </>
  )
}

export default CoursePage