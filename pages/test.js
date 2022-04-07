import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ExperienceCard from '../src/components/experiencia_card'

export default function Home(props) {

    const experienceArray = [
            {
                'start_date': '10/2019',
                'end_date': '03/2021',
                'assignments': 'Atendimento a clientes ativo e receptivo para agendamento de visitas técnicas, tal como controle e suporte das operações dos técnicos de campo',
                'company_name': 'TELEFONICA BRASIL SA',
                'company_site_link': 'https://www.telefonica.com.br/',
                'occupation': 'Atendente de agendamento e controle de operações',
            }, {
                'start_date': '06/2021',
                'end_date': '09/2021',
                'assignments': 'Registrar imóveis junto aos cartórios de imóveis de curitiba, fazendo a pré análise dos documentos necessários e antecipando erros, argumentação e resolução de problemas referentes aos contratos ingresados.',
                'company_name': 'BPS NOVOS NEGOCIOS',
                'company_site_link': 'https://bpsnovosnegocios.com.br/',
                'occupation': 'Analista de registro de imóveis',
            }, {
                'start_date': '09/2021',
                'end_date': '02/2022',
                'assignments': 'Desenvolvimento de scripts automatizados de web scraping para análise de dados para rankeamento de clientes ativos e em potencial.',
                'company_name': 'BPS NOVOS NEGOCIOS',
                'company_site_link': 'https://bpsnovosnegocios.com.br/',
                'occupation': 'Desenvolvedor de software, business intelligence e data science',
            }
    ]

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

                {experienceArray.map(item => <ExperienceCard experienceObject={item} />)}

            </main>

        </div>
    )
}
