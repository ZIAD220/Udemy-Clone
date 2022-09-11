import React, {useEffect, useState, useRef} from 'react'
import Card from './Card'

function Courses() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/categories")
        .then((response) => response.json())
        .then((data) => {setList(data[0].courses); console.log(data)});
    }, []);

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