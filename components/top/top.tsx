import styles from '@styles/top.module.css'
import Image from 'next/image'
import MyGif from '../../assets/215984.gif'
import Link from 'next/link';

// This function will return the users name on load if there are logged in with cookies
// With a welcome back, ________
// login and sighnup will be based on github creds. 
// Next.authjs prob
function Authinticated() {
    
}

const imageStyle = {
    borderRadius: '25%',

};

export default function top() {
    return (
        <div className={styles.header}>
            <Image
            src={MyGif}
            className={styles.mainImage}
            style={imageStyle}
            alt='ascii-gif'
            />
            <div className={styles.title}>
                <h1>The Cube Project: Programming LFG</h1>
                <button>Access User Base</button>
            </div>
            <div className={styles.loginstatus}>
                <Link href="/login">
                    <button className={styles.loginButton}>Login</button>
                </Link>
                <Link href="/login">
                <button className={styles.loginButton}>Sign Up</button>
                </Link>
            </div>
        </div>
    )
}