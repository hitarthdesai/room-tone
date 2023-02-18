import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Home from './Home'

export default function App() {
  return (
    <>
      <Head>
        <title>AuditoriumTitle</title>
        <meta name="description" content="AuditoriumSound" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home/>
    </>
  )
}
