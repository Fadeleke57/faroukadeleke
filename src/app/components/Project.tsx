'use client'
import React from "react";
import styles from '../styles/Project.module.css'
import Link from "next/link";

type ProjectProps = {
    codeLink: string,
    demoLink : string | null
    skills: string[],
    title : string,
    description : string,
    image : string,
}

function Project({codeLink, demoLink, skills, title, description, image} : ProjectProps) {
  return (
    <Link href={demoLink ? demoLink : codeLink} target="blank">
        <div className={styles.project}>
            <div className={styles.image}>
                <img className={styles.project_img} src={image} alt=""/>
            </div>
            <div className={styles.intro}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className={styles.tags}>
                {skills.map((skill, id) => (
                    <p key={id}>{skill}</p>
                ))}
            </div>
        </div> 
    </Link>
  )
}

export default Project;