import React, {ReactNode, useRef} from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Projects.module.css'

type ArrowProps = {
  children: ReactNode | null,
  link: string
}

function Arrow({children, link} : ArrowProps) {

    const arrow = useRef(null);//link arrow ref

    const handleHover = () => {//moves arrow right on hover
      if (arrow) {
        gsap.to(arrow.current, {
          x: 30,
          duration: 0.2
        });
      };
    };

    const handleMouseLeave = () => {//resets when mouse leaves link
      if (arrow) {
        gsap.to(arrow.current, {
          x: 0,
          duration: 0.2
        });
      };
    };
  return (
    <Link href={link} target='blank'>
    <div 
      className={styles.projectHeader}
      onMouseEnter={() => handleHover()} 
      onMouseLeave={() => handleMouseLeave()}
      >
      <h2>
      {children}
      <FontAwesomeIcon 
      icon={faArrowRight} 
      ref={arrow} 
      className={styles.projectArrow}
      />
      </h2>
    </div>
  </Link>
  )
}

export default Arrow