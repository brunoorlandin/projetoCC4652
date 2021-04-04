import Head from 'next/head'
import { useEffect, useState } from 'react';
import styles from '../styles/styles.module.css'

export default function Home() {

  const [dados, setDados] = useState({});

  const chamarApi = async () => {
    await fetch('/api/getData')
          .then((res) => res.json()
            .then(respostaApi => {
              setDados(respostaApi)
            })
          ) 
  }

  useEffect(() => {
    setInterval(chamarApi,1000);
    // chamarApi()
  }, []);

  return (
  <div className={styles.container}>
      <Head>
        <title>Projeto Arduino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id='fumaca' className = {styles.fumaca}>
         <h2>Fumaça</h2>
         <h1>{dados.fumaca}</h1>
         <h1>{dados.day}/{dados.month}/{dados.year}</h1>
         <h1>{dados.hour}:{dados.minutes}</h1>
      </div>
      <div id='gas' className = {styles.gas}>
      <h2>Gás</h2>
      <h1>{dados.gas}</h1>
      </div>
    </div>
  )
}
