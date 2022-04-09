import styles from "../../styles/Blog.module.css"
import Head from "next/head"
import PostObject from "../../src/components/PostObject/index.js"
import Image from "next/image"
import instagram from '../../src/images/instaLogo.png'
import github from '../../src/images/githubLogo.png'
import linkedin from '../../src/images/linkedinLogo.png'
import whatsapp from '../../src/images/whatsappLogo.png'

export async function getServerSideProps(){
    const { MongoClient } = require('mongodb')

    const mongo_user = process.env.MONGO_DB_USER
    const mongo_password = process.env.MONGO_DB_PASSWORD
    
    const mongo_uri = "mongodb+srv://"+mongo_user+":"+mongo_password+"@cluster0.szi09.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

    const client = new MongoClient(mongo_uri, {useNewUrlParser: true})

    async function findOneByType(client, type){
        await client.connect()
        const result = await client.db("Cluster0").collection("config_collection").findOne({type: type})
        
        return result
    }

    const result = await findOneByType(client, 'site_home_data')

    delete result._id

    return {
        props: {
            lista_teste: [
                {
                    slug:"primeiro-post",
                    title:"Meu primeiro post",
                    date:"2022-04-05",
                    description:"Post teste, mas clica ai pra ver o layout do blog!",
                    text:"Este post foi upado por um script de python3, e é apenas para fazer um...",
                },
                {
                    slug:"primeiro-post",
                    title:"Meu primeiro post",
                    date:"2022-04-05",
                    description:"Todos os post's vão levar para a mesma pagina, em breve sera um blog grande! kkk",
                    text:"Este post foi upado por um script de python3, e é apenas para fazer um...",
                },
                {
                    slug:"primeiro-post",
                    title:"Meu primeiro post",
                    date:"2022-04-05",
                    description:"Imagina uma descrição muito boa aqui! é, um dia vai ser assim...",
                    text:"Este post foi upado por um script de python3, e é apenas para fazer um...",
                },
                {
                    slug:"primeiro-post",
                    title:"Meu primeiro post",
                    date:"2022-04-05",
                    description:"Post teste feito por python3",
                    text:"Este post foi upado por um script de python3, e é apenas para fazer um...",
                }
            ],
        }
    }
}

export default function (props) {
    const lista_de_posts = props.lista_teste

    return(
        <div className={styles.container}>
            <Head>
                <title>Jonathan Lauxen Romano</title>
                <meta name="description" content="Programador iniciante em busca de novas aventuras!" />
                <meta charSet="utf-8"/>
            </Head>

            <main>
                <h1 className={styles.title}>
                    Blog
                </h1>
                
                <div className={styles.postsBox}>
                    {lista_de_posts.map(item => <PostObject postObject={item}/>)}
                </div>

                <footer className={styles.socialMediaBox}>
                    <div className={styles.socialMediaIcon}>
                        <a href="https://github.com/JonathanRomano" target="_blank">
                            <Image src={github} />
                        </a>
                    </div>

                    <div className={styles.socialMediaIcon}>
                        <a href="https://www.linkedin.com/in/jonathan-lauxen-romano-626718193/" target="_blank">
                            <Image src={linkedin} />
                        </a>
                    </div>

                    <div className={styles.socialMediaIcon}>
                        <a href="https://instagram.com/jonathan_lauxen_?igshid=YmMyMTA2M2Y=" target="_blank">
                            <Image src={instagram} />
                        </a>
                    </div>

                    <div className={styles.socialMediaIcon}>
                        <a href="https://api.whatsapp.com/send?phone=5541992388985&text=Ol%c3%a1%2c+visitei+o+seu+site.+Podemos+conversar%3f" target="_blank">
                            <Image src={whatsapp} />
                        </a>
                    </div>
                </footer>
            </main>
        </div>
    )
}