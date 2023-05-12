import styles from '@styles/top.module.css'
import Image from 'next/image'
import MyGif from '../../assets/215984.gif'

export default function top() {
    return (
        <div className={styles.header}>
            <Image
            src={MyGif}
            className={styles.mainImage}
            alt='ascii-gif'
            />
            <h1>The Cube Project: Programming LFG</h1>
        </div>
    )
}