import Head from 'next/head'
import styles from './oldPage.module.css'
import ExperienceCard from './ExperienciaCard'
import Image from 'next/image'
import myPic from '../../src/images/eu.jpeg'
import instagram from '../../src/images/instaLogo.png'
import github from '../../src/images/githubLogo.png'
import linkedin from '../../src/images/linkedinLogo.png'
import whatsapp from '../../src/images/whatsappLogo.png'
import { useState } from 'react'
import Link from 'next/link'

export async function getStaticProps(){
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

    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
    console.log(result)
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')

    return {
        props: {
            result: result.data,
        }
    }
}

export default function Home(props) {

    const experienceArray = props.result.experiences
    const description = props.result.description
    const qualities = props.result.qualities
    const [curriculoState, setCurriculoState] = useState(styles.curriculoBoxHiden)
    const [curriculoBtnText, setCurriculoBtnText] = useState("Currículo")

    function curriculoBoxFunction(){
        if (curriculoState === styles.curriculoBox){
            setCurriculoState(styles.curriculoBoxHiden)
            setCurriculoBtnText("Currículo")
        } else {
            setCurriculoState(styles.curriculoBox)
            setCurriculoBtnText("Ocultar")
        }
    
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Jonathan Lauxen Romano</title>
                <meta name="description" content="Programador iniciante em busca de novas aventuras!" />
                <meta charSet="utf-8"/>
            </Head>

            <main>
                <div className={styles.title}>
                    <h1>Jonathan Lauxen Romano</h1>
                </div>

                <div className={curriculoState}>

                    <div className={styles.imageBox}>
                        <div className={styles.myPic}>
                            <Image src={myPic} className={styles.myPic}/>
                        </div>
                    </div>

                    <p>
                        <b>Objetivo: </b>{description}
                    </p>
                    <br/>

                    <b>Pontos fortes:</b>
                    <ul>
                        {qualities.map(item => <li>{item}</li>)}
                    </ul>

                    {experienceArray.map(item => <ExperienceCard experienceObject={item} />)}
                    
                </div>



                <div className={styles.menuBox}>

                    <button onClick={curriculoBoxFunction} className={styles.menuBtn}>{curriculoBtnText}</button>

                    <Link href="https://github.com/JonathanRomano">
                        <a className={styles.menuBtn}>Portfólio</a>
                    </Link>

                    <Link href="/blog">
                        <a className={styles.menuBtn}>Sobre mim</a>
                    </Link>

                    <Link href="/blog">
                        <a className={styles.menuBtn}>Blog</a>
                    </Link>
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
