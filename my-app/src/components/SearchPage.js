import React from 'react'
import NavBar from './NavBar';
import TopAnnounce from './TopAnnounce';
import {useSearchParams} from 'react-router-dom'
import Card from './Card';
import styles from './styles/SearchPage.module.css'
/*
function searchCourses(){
    let need = document.forms[0]["search"].value;
    document.getElementById("coursesList").innerHTML = "";
    document.getElementById("header").innerText = "Search Result for " + need;
    need = need.toLowerCase();
    document.getElementById("description").innerText = ``;
    document.getElementById("exploreButton").style.visibility = "hidden";
    
    let courses = [];
    for(let i = 0; i < categories.length; i++){
        let data = categories[i];
        for(let j = 0; j < data["courses"].length; j++){
            let title = data["courses"][j]["title"];
            title = title.toLowerCase();
            if (title.includes(need) === false)
                continue;
            let instructors = "";
            for(let k = 0; k < data["courses"][j]["instructors"].length; k++){
                instructors += data["courses"][j]["instructors"][k]["name"];
                instructors += j == data["courses"][j]["instructors"].length - 1 ? "" : ", ";
            }
            let li = courseHTML(data["courses"][j], instructors);
            courses.push(li);
        }
    }
    document.getElementById("coursesList").innerHTML += courses;
    return true;
} 

document.getElementById("searchButton").onclick = function(e){
    e.preventDefault();
    searchCourses();
    return false;   
}*/

function SearchPage({list}) {
    const[searchParams, setSearchParams] = useSearchParams();
    const searchValue = searchParams.get('search_query');
    if (list.length === 0)
        return (<></>)
    return (
    <>
        <TopAnnounce></TopAnnounce>
        <NavBar></NavBar>
        {searchValue ? <h2>Search Results for {searchValue}</h2> : <></>}
        <div className={styles.box}>
        <ul id={styles["coursesList"]}>
            {
                searchValue ? <>
                    {list.map(function(course){
                        let title = course.title;
                        title = title.toLowerCase();
                        return(title.includes(searchValue) ? <Card {...course}/>:<></>)
                    })}
                    </>
                :
                    <h2>You can search courses in search box above.</h2>
            }
        </ul>
        </div>
    </>
  )
}

export default SearchPage