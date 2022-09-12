import React from 'react'
import styles from './styles/Description.module.css'

function Description(props) {
  const {description, whoFor} = props;
  return (
    <>
      <div className={styles.description}>
          <h2>Description</h2>
          <br></br>
          {
            description.map((paragraph) => <><p>{paragraph}</p><br></br></>)
          }
          <h2>Who this course is for:</h2>
          <br></br>
          <ul>
            {
              whoFor.map((paragraph) => <li><p>{paragraph}</p></li>)
            }
          </ul>
      </div>
      <br></br>
      </>
  )
}

export default Description