import React, {useState} from "react"
import styles from "../../../styles/Home.module.css"

const ExperienceCard = ({experienceObject}) => {

    // Start of my test // 

    const [x, setX] = useState(2)

    function button_test_function(){
        if (x === 1){
            setX(2)
        } else {
            setX(1)
        }
    }

    let body

    if (x === 1){
        body = <div>
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
            <button className={styles.btn} onClick={button_test_function}>Ver menos</button>
        </div>
            

    } else {
        body = <div>
            <p>
                {experienceObject.occupation} em <a className={styles.company_link} href={experienceObject.company_site_link} target='_blank'>{experienceObject.company_name}</a>
            </p>
            <button className={styles.btn} onClick={button_test_function}>Ver mais</button>
        </div>
    }

    // End //

return (
        <div className={styles.experienceCard}>

        {body}
        
        <hr/>

        </div>
    )
}

export default ExperienceCard