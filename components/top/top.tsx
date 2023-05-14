import styles from '@styles/top.module.css'
import Image from 'next/image'
import MyGif from '../../assets/215984.gif'

// This function will return the users name on load if there are logged in with cookies
// With a welcome back, ________
// login and sighnup will be based on github creds. 
// Next.authjs prob
function Authinticated() {
    
}

export default function top() {
    return (
        <div className={styles.header}>
            <Image
            src={MyGif}
            className={styles.mainImage}
            alt='ascii-gif'
            />
            <div className={styles.title}>
                <h1>The Cube Project: Programming LFG</h1>
                <button>Access User Base</button>
            </div>
            <div className={styles.loginstatus}>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </div>
    )
}