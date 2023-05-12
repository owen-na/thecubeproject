import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Cube from '../components/cube/cube'
import Top from '../components/top/top'
import TestPost from '../components/post/post'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Top></Top>
     <Cube></Cube>
     <TestPost></TestPost>
    </>
  )
}
