import React from 'react'
import styles from './styles/Footer.module.css'
import nasdaq from './images/nasdaq.svg'
import volkswagen from './images/volkswagen.svg'
import box from './images/box.svg'
import netapp from './images/netapp.svg'
import eventbrite from './images/eventbrite.svg'
import logo from './images/logo white.svg'

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.topCompanies}>
            <h3>Top compaines choose <strong>Udemy Business</strong> to build in-demand career skills.</h3>
            <ul>
                <li><img src={nasdaq} className={styles.company}></img></li>
                <li><img src={volkswagen} className={styles.company}></img></li>
                <li><img src={box} className={styles.company}></img></li>
                <li><img src={netapp} className={styles.company}></img></li>
                <li><img src={eventbrite} className={styles.company}></img></li>
            </ul>
        </div>
        <hr></hr>
        <br></br>
        <div className={styles.fcontainer}>
            <div className={styles.frow}>
                <div className={styles.fcol}>
                    <ul className={styles.flist}>
                        <li><a>Udemy Business</a></li>
                        <li><a>Teach on Udemy</a></li>
                        <li><a>Get the app</a></li>
                        <li><a>About us</a></li>
                        <li><a>Contact us</a></li>
                    </ul>
                </div>
                <div className={styles.fcol}>
                    <ul className={styles.flist}>
                        <li><a>Careers</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Help and Support</a></li>
                        <li><a>Affilliate</a></li>
                        <li><a>Investors</a></li>
                    </ul>
                </div>
                <div className={styles.fcol}>
                    <ul className={styles.flist}>
                        <li><a>Terms</a></li>
                        <li><a>Privacy policy</a></li>
                        <li><a>Cookie settings</a></li>
                        <li><a>Sitemap</a></li>
                        <li><a>Accessibility statement</a></li>
                    </ul>
                </div>
                <div className={styles.fcol}>
                </div>
                <div className={styles.fcol}>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <div className={styles.inc}>
            <img src={logo} alt='Udemy'></img>
            <p >© 2022 Udemy, Inc.</p>
        </div>
    </footer>
  )
}

export default Footer