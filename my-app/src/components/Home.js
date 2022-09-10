import React from 'react'
import TopAnnounce from './TopAnnounce'
import NavBar from './NavBar'
import Wall from './Wall'
import CoursesTabs from './CoursesTabs'
import ExploreBox from './ExploreBox'

function Home() {
  return (
    <>
        <TopAnnounce></TopAnnounce>
        <NavBar></NavBar>
        <Wall></Wall>
        <CoursesTabs></CoursesTabs>
        <ExploreBox></ExploreBox>
    </>
  )
}

export default Home