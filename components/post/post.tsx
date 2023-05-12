import styles from '@styles/post.module.css'

export default function post() {
    return (
        <div className={styles.postCard}>
            <h2>Post title here</h2>
            <p>project name: skills needed</p>
            <p>The descrition of whats needed and any other info pref 300 chars or less</p>
        </div>
    )
}