import React, {useEffect} from "react";
import styles from "./styles/Modal.module.css";
import tv from './images/tv.png'
import file from './images/blank-file.png'
import download from './images/download.png'
import infinity from './images/infinity.png'
import mobile from './images/mobile.png'
import trophy from './images/trophy.png'
import './styles/CourseDetails.module.css'
import CourseDetails from "./CourseDetails"

export default function Modal() {

    useEffect(() => function(){
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};

    // Get the offset position of course details
    let sticky = 450;

    function myFunction() {
        let modal = document.getElementById("modalBox");
        let cover = document.getElementById("courseImage");
        if (window.pageYOffset > sticky) {
            cover.style.display = 'none';
            modal.style.position = 'fixed';
            modal.style.top = '-50%';

        } else {
            modal.style.position = 'absolute';
            cover.style.display = 'inline-block';
            modal.style.top = '0%';
        }
    }
    })

  return (
    <div className={styles.modal} id="modalBox">
        <img src="https://img-b.udemycdn.com/course/240x135/394676_ce3d_5.jpg" id="courseImage"></img>
        <div className={styles.modalContent}>
        <ul className={styles.pricesList}>
            <li><h1>E£269.99</h1></li>
            <li><h3 id={styles["originalPrice"]}>E£679.99</h3></li>
            <li><p id={styles["discount"]}>60% off</p></li>
        </ul>
        <p id={styles["dontMiss"]}><strong>2 days </strong> left at this price</p><br/>
        <button className={styles.btn} id={styles["addCart"]}>Add to cart</button><br/><br/>
        <button className={styles.btn} id={styles["buyNow"]}>Buy now</button>
        <p id={styles["moneyBack"]}>30-Day Money-Back Guarantee</p><br/>
        <h3>This course includes:</h3>
        <ul className={styles.courseIncludes}>
            <li>
                <img src={tv} className={styles.icons}></img>
                <p>14-hours on-demand video</p>
            </li>
            <li>
                <img src={file} className={styles.icons}></img>
                <p>1 Article</p>
            </li>
            <li>
                <img src={download} className={styles.icons}></img>
                <p>3 downloadable resources</p>
            </li>
            <li>
                <img src={infinity} className={styles.icons}></img>
                <p>Full lifetime access</p>
            </li>
            <li>
                <img src={mobile} className={styles.icons}></img>
                <p>Access on mobile and TV</p>
            </li>
            <li>
                <img src={trophy} className={styles.icons}></img>
                <p>Certificate of completion</p>
            </li>
        </ul>
        <ul className={styles.shareLinks}>
            <li><a>Share</a></li>
            <li><a>Gift this course</a></li>
            <li><a>Apply Coupon</a></li>
        </ul>
        <br/><hr/>
        <h2 id={styles["isTraining"]}>Training 5 or more people?</h2>
        <p id={styles["teamAccess"]}>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
        <button className={styles.btn} id={styles["tryUdemy"]}>Try Udemy Business</button>
        </div>
    </div>
  );
}