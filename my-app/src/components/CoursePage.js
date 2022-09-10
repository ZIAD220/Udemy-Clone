import React from 'react'
import CourseDetails from './CourseDetails'
import Learn from './Learn'
import NavBar from './NavBar'
import TopAnnounce from './TopAnnounce'

function CoursePage() {
  return (
    <>
        <TopAnnounce></TopAnnounce>
        <NavBar></NavBar>
        <CourseDetails></CourseDetails>
        <Learn></Learn>
    </>
  )
}

export default CoursePage