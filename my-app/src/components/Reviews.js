import React from 'react'
import styles from './styles/Reviews.module.css'
import search from './images/search button.png'
import UserIcon from './UserIcon'
import rate from './images/rate4.4.jpg'
import like from './images/like.png'

function Reviews(props) {
    const {reviews} = props;
  return (
    <div className={styles.reviews}>
        <h2>Reviews</h2>
        <div className={styles.reviewsInput}>
            <input type='search' placeholder='Search reviews' id={styles["searchReviews"]}></input>
            <img src={search} id={styles["searchButton"]}></img>
            <select id={search["rates"]}>
                <option value="" disabled selected>All ratings</option>
                <option value="five stars">Five stars</option>
                <option value="four stars">Four stars</option>
                <option value="three stars">Three stars</option>
                <option value="two stars">Two stars</option>
                <option value="one star">One star</option>
            </select>
        </div>
        <br></br>
        <ul id={styles["reviewsList"]}>
                {
                    reviews.map((review) => 
                        <><li>
                            <UserIcon name={review.name}></UserIcon>
                            <ul className={styles.reviewSpace}>
                                <li><h5>{review.name}.</h5></li>
                                <li><img src={rate} className={styles.rate}></img></li>
                                <li><p>{review.content}</p></li>
                                <li><p className={styles.isHelpful}>Was this review helpful?</p></li>
                                <li>
                                    <img src={like} className={styles.like}></img>
                                    <img src={like} className={styles.dislike}></img>
                                    <a className={styles.report}>Report</a>
                                </li>
                            </ul>
                            <br></br>
                        </li>
                        <br></br>
                        <hr></hr>
                        <br></br></>
                    )
                }
        </ul>
    </div>
  )
}

export default Reviews