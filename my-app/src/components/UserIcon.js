import React from 'react'
import styles from './styles/UserIcon.module.css'

function UserIcon(props) {
    const {name} = props;
    let names = name.split(" ");
    let letters = names[0][0] + (names.length > 1 ? names[1][0] : '');
    return (
        <div className={styles.userIcon}>
            <h4>{letters}</h4>
        </div>
    )
}

export default UserIcon