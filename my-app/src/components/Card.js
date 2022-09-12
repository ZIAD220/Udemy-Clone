import React from 'react'
import styles from './styles/Card.module.css'
import rate from './images/rate4.4.jpg'
import CoursePopup from './CoursePopup'

function getPopup(id){
  let popup = document.getElementById(`popup${id}`);
  popup.style.display = 'inline-block';
}

function clearPopup(id){
  let popup = document.getElementById(`popup${id}`);
  popup.style.display = 'none';
}

function Card(props) {
  return (
    <>
      <li onMouseMove={() => getPopup(props.id)} onMouseOut={() => clearPopup(props.id)}>
          <img src={props.image} className={styles.courseImage} alt="Course Cover"></img>
              <figcaption className={styles.courseTitle}><b>{`${props.title}`}</b></figcaption>
              <figcaption className={styles.authors}>{`${props.instructors}`}</figcaption>
              <figcaption className={styles.rate}><img src={rate} alt="Course rate"></img> (2,923)</figcaption>
              <figcaption className={styles.price}><b>E£{`${props.price}`}</b></figcaption>
      </li>
      
    </>
  )
}

export default Card