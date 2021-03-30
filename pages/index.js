import Head from 'next/head'
import styles from '../styles/styles.module.css'

export default function Home() {
  return (
  
  <div className={styles.container}>
      <Head>
        <title>Projeto Arduino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Home</h1>
      </main>
    </div>
  )
}
