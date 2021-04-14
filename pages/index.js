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
         <h1>Fumaça</h1>
         <p>Status: {dados.fumaca}</p>
         <p>Dia: {dados.day}/{dados.month}/{dados.year}</p>
         <p>Ultima atualização: {dados.hour}:{dados.minutes}</p>
      </div>
      <div id='gas' className = {styles.gas}>
      <h1>Gás</h1>
         <p>Status: {dados.gas}</p>
         <p>Dia: {dados.day}/{dados.month}/{dados.year}</p>
         <p>Ultima atualização: {dados.hour}:{dados.minutes}</p>
      </div>
    </div>
  )
}
