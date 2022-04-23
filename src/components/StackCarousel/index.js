import styles from './stackcard.module.css'
import Image from 'next/image'
import { useState } from 'react'

const StackCarousel = ({stackArray}) => {

    const StackCard = ({stackObject}) => {

        const Logo = () => {
            try{
                return (<>
                <div className={styles.logoBox}><Image src={require(`../../images/${stackObject['title']}.png`)}/></div>
                </>)
            } catch(e){
                return <></>
            }
        }

        return (<>
            <div className={styles.box}>
                <div className={styles.titleBox}>
                    <h1>{stackObject['title']}</h1>
                    <Logo/>
                </div>
                <p>
                    {stackObject['descricao']}
                </p>
                <div className={styles.experiencia}>
                    {stackObject['tempo']}
                </div>

            </div>
        </>)
    }

    const [atual, setAtual] = useState(1)
    
    const max = stackArray.length
    
    const leftClick = () => {
        if (atual === 1){
            setAtual(max)
        } else {
            setAtual(atual - 1)
        }
    }

    const rightClick = () => {
        if (atual === max){
            setAtual(1)
        } else {
            setAtual(atual + 1)
        }
    }

    return <div className={styles.container}>
        <div className={styles.carousel}>
            <button onClick={leftClick}>
                {'<'}
            </button>
            <div>
                <StackCard stackObject={stackArray[atual - 1]}/>
            </div>
            <button onClick={rightClick}>
                {'>'}
            </button>
        </div>
    </div>
}

export default StackCarousel