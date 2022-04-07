import React from "react"
import styles from "../../../styles/Home.module.css"


const ExperienceCard = ({experienceObject}) => {
    return (
        <div className={styles.experienceCard}>

            <p>
                <b>Empresa: </b>
            
                <a className={styles.company_link} href={experienceObject.company_site_link} target='_blank'>
                    {experienceObject.company_name}
                </a>
            </p>

            <p><b>Ocupação: </b>{experienceObject.occupation}</p>

            <p>
                De {experienceObject.start_date} a {experienceObject.end_date}
            </p>

            <p>
                <b>Atividades: </b>{experienceObject.assignments}
            </p>




        <hr/>
        </div>
    )
}

export default ExperienceCard