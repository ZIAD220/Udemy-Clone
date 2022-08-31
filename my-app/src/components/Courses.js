import React, {useEffect, useState, useRef} from 'react'
import Card from './Card'

function Courses() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/categories")
        .then((response) => response.json())
        .then((data) => {setList(data[0].courses); console.log(data)});
    }, []);


    /*let courses = list[0]["courses"];
    let cards = courses.map((course) => <Card key={course.id} {...course}></Card>);
    console.log(cards);*/
    
    /*console.log(list);
    let courses = list.courses;
    let cards = courses.map(course => <Card key={course.id} {...course}></Card>);*/

    return (
        
        <> 
        {
            //<Card {...list[0]}></Card>
            list.map(course => <Card key={course.id}{...course}></Card>)
        }
        </>
    )
}

export default Courses