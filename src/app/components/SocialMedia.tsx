import React, {useRef} from 'react'
import styles from '../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import gsap from 'gsap';

type SocialMediaProps = {
    icon : IconProp,
    link : string,
    site : string,
    username : string
}

function SocialMediaIcon({icon, link, site, username} : SocialMediaProps) {
    const iconRef = useRef(null)

    const handleHover = () => {
        gsap.to(iconRef.current, {
        rotate: 360,
        duration: 0.5
      })
    };
    
      //resets
    const handleMouseLeave = () => {
        gsap.to(iconRef.current, {
          rotate: 0, 
          duration: 0.5
        });
    }
  return (
    <a
      href={link}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <h3>{site}</h3>
        <p>{username}</p>
      </div>
      <FontAwesomeIcon 
          icon={icon} 
          ref={iconRef} 
          className={styles.socialMediaIcon}
      />
    </a>
  )
}

export default SocialMediaIcon