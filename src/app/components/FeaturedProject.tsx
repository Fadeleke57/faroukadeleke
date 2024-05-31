'use client'
import React, { ReactNode} from 'react';
import styles from '../styles/Projects.module.css';
import Arrow from './Arrow';
import Info from './Info';

type ProjectData = {
  show: boolean;
  pName: string;
  date: string;
  features: string[];
  repository: string | null;
  demo: string |null;
}

type FeaturedProjectProps = {
  title: string,
  date: string,
  projectFeatures: string[],
  repo : string | null,
  demo : string | null,
  imageSrc : string,
  description : ReactNode,
  animated : boolean,
  onInfoClick : any
}

function FeaturedProject({title, date, projectFeatures, repo, demo, imageSrc, description, animated, onInfoClick} : FeaturedProjectProps) {

  const data : ProjectData = {
    show: false,
    pName : title,
    date : date,
    features : projectFeatures,
    repository : repo,
    demo : demo
  }

  return (
    <div className={animated ? styles.serviceAnim : styles.service}>
      <div className={styles.serviceHeaderBox}>
        <div className={styles.infoBox}>
          <Info info={data} onInfoClick={onInfoClick} type={0}/>
        </div>
        { demo && <Arrow link={demo} tag='h2'>{title}</Arrow>}
        { repo && <Arrow link={repo} tag='h2'>{title}</Arrow>}
        <p className={styles.serviceText}>
          {description}
        </p>
      </div>
      <div className={styles.imageBox}>
        <img src={imageSrc} className={styles.servicesImg} alt={imageSrc}/>
          <div className={styles.infoBoxMobile}>
            <Info info={data} onInfoClick={onInfoClick} type={0}/>
          </div>
      </div>
  </div>
  )
}

export default FeaturedProject