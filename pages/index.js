import styles from '../styles/Home.module.css'
import NavBar from '../src/components/NavBar'
import Card from '../src/components/Card'

export default () => {

    const myImage = require('../src/images/eu.jpeg')

    const Teste = () => {
        return <div className={styles.img}/>
    }

    return (<>
    <div className={styles.img}/>
    <div className={styles.layer}/>
    
        <div className={styles.container}>
            <NavBar/>
            
            <div className={styles.box}>
                <Card/>
            </div>
        </div>


    </>)
}
