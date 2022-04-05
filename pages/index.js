import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jonathan Lauxen Romano</title>
        <meta name="description" content="Programador iniciante em busca de novas aventuras!" />
      </Head>

      <main>
        <h1>Jonathan Lauxen Romano</h1>
        <p>Decidi voltar com o meu blog pessoal, a ideia inicial é que seja um curriculo online e que eu coloque meus projetos aqui!</p>
      </main>
    </div>
  )
}
