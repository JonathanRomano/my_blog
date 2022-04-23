import styles from './ibutplanet.module.css'
import Image from 'next/image'

const IButPlanet = ({image}) => {
    return <div className={styles.box}>
        <div className={styles.imageBox}>
            <Image src={image} className={styles.image}/>
        </div>
    </div>
}

export default IButPlanet