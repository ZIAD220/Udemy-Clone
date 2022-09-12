import React from 'react'
import styles from './styles/Instructors.module.css'
import star from './images/star.png'
import medal from './images/medal.png'
import users from './images/users.png'
import video from './images/video play.png'

function Instructors(props) {
    const {instructor} = props;
  return (
    <div className={styles.instructors}>
        <h2>Instructors</h2>
        <ul id={styles["instructorsList"]}>
            {
                instructor.map((instructor) => 
                    <li>
                        <a className={styles.instructorName}>{instructor.name}</a>
                        <p className={styles.instructorIntro}>{instructor.Intro}</p>
                        <img src={instructor.Image} className={styles.instructorImg}></img>
                        <ul className={styles.instructorStat}>
                            <li>
                                <img src={star} className={styles.icons}></img>
                                <figcaption className={styles.stats}>{instructor.Rating} Instructor Rating</figcaption>
                            </li>
                            <li>
                                <img src={medal} className={styles.icons}></img>
                                <figcaption className={styles.stats}>{instructor.reviewsNumber} Reviews</figcaption>
                            </li>
                            <li>
                                <img src={users} className={styles.icons}></img>
                                <figcaption className={styles.stats}>{instructor.studentNumber} Students</figcaption>
                            </li>
                            <li>
                                <img src={video} className={styles.icons}></img>
                                <figcaption className={styles.stats}>{instructor.courseNumber} Courses</figcaption>
                            </li>
                        </ul>
                        {instructor.description.map((paragraph) => <><p>{paragraph}</p><br></br></>)}
                    </li>
                )
            }
        </ul>
    </div>
  )
}

export default Instructors