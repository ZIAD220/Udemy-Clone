import React from 'react'
import styles from './styles/Requirements.module.css'

function Requirements(props) {
  const {requirements} = props;
  return (
    <>
        <br></br>
        <div className={styles.requirements}>
            <h2>Requirements</h2>
            <br></br>
            <ul>
              {
                requirements.map((requirement) => <li>{requirement}</li>)
              }
            </ul>
        </div>
        <br></br>
    </>
  )
}

export default Requirements