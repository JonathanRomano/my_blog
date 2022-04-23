import styles from './card.module.css'

const Card = () => {
    return (<>
        <div className={styles.cardBox}>
            <h2>Fullstack developer</h2>
            <h1>Seja bem vindo(a)</h1>
            <p>Esse é meu universo, aqui eu exponho alguns dos meus projetos e minhas experiências como desenvolvedor <strong>fullstack.</strong> Bora trocar conhecimentos?!</p>
            <button>MY CV</button>
        </div>
    </>)
}

export default Card