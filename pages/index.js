import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ExperienceCard from '../src/components/experiencia_card'

export async function getStaticProps(context){
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
            result: result.data
        }
    }
}

export default function Home(props) {

    const experienceArray = props.result.experiences

    return (
        <div className={styles.container}>
            <Head>
                <title>Jonathan Lauxen Romano</title>
                <meta name="description" content="Programador iniciante em busca de novas aventuras!" />
            </Head>

            <main>
                <h1 className={styles.title}>Jonathan Lauxen Romano</h1>
                
                <h1>Experiências profissionais</h1><hr/>

                {experienceArray.map(item => <ExperienceCard experienceObject={item} />)}

            </main>

        </div>
    )
}
