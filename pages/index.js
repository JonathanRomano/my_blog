import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {

    const [ ano, setAno ] = useState(1)
    var stringAno = 'anos'

    function adicionar () {
        if (ano < 21){
            setAno(ano + 1)
        }
    }

    function remover () {
        if (ano > 1){
            setAno(ano - 1)
        }
    }

    if (ano === 1) {
        stringAno = 'ano'
    }
    else if (ano === 21){
        stringAno = 'anos, nada mais do que isso :)'
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Jonathan Lauxen Romano</title>
                <meta name="description" content="Programador iniciante em busca de novas aventuras!" />
            </Head>

            <main>

                <h1 className={styles.title}>Jonathan Lauxen Romano</h1>

                <p>Brasileiro, casado, {ano} {stringAno}</p>

                <button className={styles.btn} onClick={remover}>
                    Menos um ano
                </button>

                <button className={styles.btn} onClick={adicionar}>
                    Mais um ano
                </button>

            </main>

        </div>
    )
}
