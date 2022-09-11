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

function CoursePage() {
  return (
    <>
        <TopAnnounce></TopAnnounce>
        <NavBar></NavBar>
        <CourseDetails></CourseDetails>
        <Learn></Learn>
        <CourseContent></CourseContent>
        <Requirements></Requirements>
        <Description></Description>
        <Instructors></Instructors>
        <StudentFeedback></StudentFeedback>
        <Reviews></Reviews>
        <Footer></Footer>
    </>
  )
}

export default CoursePage