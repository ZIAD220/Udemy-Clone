import React from 'react'
import styles from './styles/Instructors.module.css'
import star from './images/star.png'
import medal from './images/medal.png'
import users from './images/users.png'
import video from './images/video play.png'

function Instructors() {
  return (
    <div className={styles.instructors}>
        <h2>Instructors</h2>
        <ul id={styles["instructorsList"]}>
            <li>
                <a className={styles.instructorName}>Avinash Jain</a>
                <p className={styles.instructorIntro}>CEO of TheCodex.me - Teaching 500,000+ Students how to code</p>
                <img src='https://img-c.udemycdn.com/user/200_H/10260436_946b_6.jpg' className={styles.instructorImg}></img>
                <ul className={styles.instructorStat}>
                    <li>
                        <img src={star} className={styles.icons}></img>
                        <figcaption className={styles.stats}>4.4 Instructor Rating</figcaption>
                    </li>
                    <li>
                        <img src={medal} className={styles.icons}></img>
                        <figcaption className={styles.stats}>73,915 Reviews</figcaption>
                    </li>
                    <li>
                        <img src={users} className={styles.icons}></img>
                        <figcaption className={styles.stats}>893,771 Students</figcaption>
                    </li>
                    <li>
                        <img src={video} className={styles.icons}></img>
                        <figcaption className={styles.stats}>16 Courses</figcaption>
                    </li>
                </ul>
                <p> Avinash Jain is currently a senior at UC Berkeley majoring in Electrical Engineering and Computer Science. 
                    He's the CEO and Founder of TheCodex, 
                    an online educational platform focused on bringing 
                    the best programming content to hundreds of thousands of students around the world.</p>
                <br></br>
                <p>His programming journey began at the age of 10, starting off with simple Python scripts to crawl the weather. 
                    Since then, he's worked at numerous companies and is professionally experienced in Python, iOS Development and Web Development. 
                    He's launched a plethora of applications in the App Store amassing thousands of downloads. 
                    Additionaly, he's competed and won in several hackathons around the world including PennApps and NWHacks.</p>
            </li>
        </ul>
    </div>
  )
}

export default Instructors