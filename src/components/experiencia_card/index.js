import React, {useState} from "react"
import styles from "../../../styles/Home.module.css"

const ExperienceCard = ({experienceObject}) => {

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
        body = <div className={styles.experienceCard}>
            <div>
                <p>
                    <b>Empresa: </b>
                    <a className={styles.company_link} href={experienceObject.company_site_link} target='_blank'>{experienceObject.company_name}</a>
                </p>

                <p>
                    <b>Ocupação: </b>{experienceObject.occupation}
                </p>

                <p>
                    De {experienceObject.start_date} a {experienceObject.end_date}
                </p>

                <p>
                    <b>Atividades: </b>{experienceObject.assignments}
                </p>
            </div>
            
            <button className={styles.btn} onClick={button_test_function}>&#9650;</button>
        </div>
            

    } else {
        body = 
        <div className={styles.experienceCard}>
            <div>
                {experienceObject.occupation} em <a className={styles.company_link} href={experienceObject.company_site_link} target='_blank'>{experienceObject.company_name}</a>
            </div>
            

            <button className={styles.btn} onClick={button_test_function}>&#9660;</button>

        </div>
    }

return body
}

export default ExperienceCard