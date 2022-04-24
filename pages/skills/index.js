import StackCarousel from "../../src/components/StackCarousel"
import styles from "../../styles/stacks.module.css"
import NavBar from "../../src/components/NavBar"

const x = [
    {
        'title': 'Python',
        'descricao': "Programação de scripts para automação de serviços, testes automatizados e REST API's com Flask",
        'tempo': '3 Anos',
    },{
        'title': 'Java Script',
        'descricao': "Manipulação de objetos e logica de programação atravez da linguagem de programação interpretada pelos navegadores",
        'tempo': 'a long time ago',
    },{
        'title': 'css3',
        'descricao': "Estilização de componentes e essas coisas, apartir desse momento o sono chegou e eu estou enrolando!",
        'tempo': '25 dias',
    }
]

export default () => {
    return (<>
        <div className={styles.img}>
        <div className={styles.layer}/>

        <div className={styles.container}>
            <NavBar/>

            <StackCarousel stackArray={x}/>
        </div>

        </div>
    </>)
}