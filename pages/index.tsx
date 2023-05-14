import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Cube from '../components/cube/cube'
import Top from '../components/top/top'
import TestPost from '../components/post/post'
import Footer from '@/components/footer/footer'
const inter = Inter({ subsets: ['latin'] })


// if no posts are found
// create a small div saying wow its empty? be the first to cry for help LOL.

// checks for empty posts
function emptyPostChecker() {
  // if posts exist in the DB, post them map them out
  // if not
  return (
    <div>
      <p>Image holder</p>
      <p>Wow you guys made it empty here? Be the first to cry for help LOL.</p>
    </div>
  )
}

export default function Home() {
  return (
    <>
     <Top />
     {/* <Cube /> */}
    {/* {emptyPostChecker} doesnt work for some reason??? */}
     <TestPost />
     <Footer />
    </>
  )
}
