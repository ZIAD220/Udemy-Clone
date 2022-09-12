import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Card from './Card'
import CoursePopup from './CoursePopup';

function Courses({list}) {
    return (
        
        <> 
        {
            //<Card {...list[0]}></Card>
            list.map(course => 
            <Link to={`/course/${course.id}`}>
                <Card key={course.id}{...course}></Card>
                <li><CoursePopup {...course}></CoursePopup></li>
            </Link>)
        }
        </>
    )
}

export default Courses