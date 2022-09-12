import React from 'react'
import styles from './styles/CourseContent.module.css'
import arrow from './images/arrow.png'
import video from './images/video play.png'

function extend(i){
    let arrow = document.getElementById(`arrow${i}`);
    let subContent = document.getElementById(`subContent${i}`);
    if (subContent.style.display === "none"){
        subContent.style.display = "block";
        arrow.style.transform = 'rotate(270deg)';
    }
    else{
        subContent.style.display = "none";
        arrow.style.transform = '';
    }
}

function CourseContent(props) {
    const {sectionsCount, lecturesCount, totalLength, content} = props;
    
    let list = [];

    for(let i = 0; i < content.length; i++){
        list.push(
            <li id={`content${i}`} className={styles.content} onClick={() => extend(i)}>
                <img src={arrow} id={`arrow${i}`}></img>
                <h3>{content[i][0][0]}</h3>
                <p>{content[i][1].length} lectures 6min</p>
                <br></br>
            </li>
        );
        let subList = [];
        for(let j = 0; j < content[i][1].length; j++){
            subList.push(
                <>
                    <img src={video}></img>
                    <h4>{content[i][1][j]}</h4>
                    <p>00:00</p>
                    <br></br>
                </>
            )
        }
        list.push(<li id={`subContent${i}`}className={styles.subContent}>{subList}</li>);
    }

    /*
        
            <li>
                <img src={arrow}></img>
                <h3>Up and Running With Python</h3>
                <p>2 lectures 6min</p>
                <br></br>
            </li>
            <li className={styles.contentSubList}>
                <img src={video}></img>
                <h4>Installing Python</h4>
                <p>04:07</p>
                <br></br>
                <img src={video}></img>
                <h4>Hello World</h4>
                <p>01:37</p>
            </li>
    */

  return (
    <div className={styles.courseContent}>
        <h2>Course content</h2>
        <br></br>
        <div className={styles.duration}>
            <p>{sectionsCount} sections {lecturesCount} lectures {totalLength} total length</p>
            <a>Expand all sections</a>
        </div>
        <br></br>
        <ul className={styles.contentList}>{list}</ul>
    </div>
  )
}

export default CourseContent