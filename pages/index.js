import Head from 'next/head'
import styles from '../styles/styles.module.css'
import script from '../public/script.js';
export default function Home() {
  function Start(params) {
    setInterval(Get,1000);
  }
  return (
  
  <div className={styles.container}>
      <Head>
        <title>Projeto Arduino</title>
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="/script.js"></script>
      </Head>
      <div id='fumaca' className = {styles.fumaca}>
         <h2>Fumaça</h2>
      </div>
      <div id='gas' className = {styles.gas}>
      <h2>Gás</h2>
      </div>
      <button type='button' onClick={Start}> Start </button>
    </div>
  )
}
