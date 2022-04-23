import styles from './navbar.module.css'
import Link from 'next/link'

const NavBar = () => {
    return (<>
        <div className={styles.box}>
            
            <Link href="/new_page">
                <a className={styles.title}>Jonathan Lauxen Romano</a>
            </Link>
            
            <div className={styles.itens}>
                <Link href="/stacks">
                    <a className={styles.item}>Stacks</a>
                </Link>
                
                <Link href="/">
                    <a className={styles.item}>Projects</a>
                </Link>

                <Link href="/">
                    <a className={styles.item}>About me</a>
                </Link>
            </div>
        </div>
    </>)
}

export default NavBar