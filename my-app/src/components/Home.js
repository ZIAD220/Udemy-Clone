import React from 'react'
import TopAnnounce from './TopAnnounce'
import NavBar from './NavBar'
import Wall from './Wall'
import CoursesTabs from './CoursesTabs'
import ExploreBox from './ExploreBox'
import Footer from './Footer'

function Home({list}) {
  return (
    <div className="App">

        <TopAnnounce></TopAnnounce>
        <NavBar></NavBar>
        <Wall></Wall>
        <CoursesTabs></CoursesTabs>
        <ExploreBox list={list}></ExploreBox>
        <Footer></Footer>
    </div>
  )
}

export default Home