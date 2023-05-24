import Cube from '../components/cube/cube'
import Footer from '@/components/footer/footer'
import styles from '@styles/maincube.module.css'

export interface CubeInfo {
    username: string;
    title: string;
    amountofProjects: number;
    majorColor: string;
    languages: string[];
}

export default function MainCube() {
    return (
        <div className={styles.main}>
            <h1>The Board</h1>
            <Cube />
            <br></br>
            <Footer />
        </div>
    )
}