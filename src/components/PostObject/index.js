import React, {useState} from "react"
import styles from "../../../styles/Blog.module.css"
import Link from "next/link"

const PostObject = ({postObject}) => {

    return (
        <Link href={"./blog/" + postObject.slug}>
        <div className={styles.postCard}>
            <h1>
                {postObject.title}
            </h1>


            <p>
                {postObject.description}
            </p>

            <p className={styles.postData}>
                {postObject.date}
            </p>

        </div>
        </Link>
    )
}

export default PostObject