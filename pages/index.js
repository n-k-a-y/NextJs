import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import HomePage from '../components/homepage'
import NavBar from '../components/navbar'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (

<>
    <NavBar/>
  <HomePage/>
  <Footer/>
    </>
  )
}
