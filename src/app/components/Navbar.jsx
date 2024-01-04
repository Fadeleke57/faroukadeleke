'use client'
import styles from '../styles/Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Search from './Search'



function Navbar() {

  const gitHubLink="https://github.com/Fadeleke57"
  const linkedInLink="https://www.linkedin.com/in/farouk-adeleke/"

  const [menuOpen, setMenuOpen] = useState(false)
  const [nav, setNav] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function activateNav() {
      let scrollPosition = window.pageYOffset
      if(scrollPosition > 200) {
        setNav(true)
      } else if (scrollPosition < 10) {
        setNav(false)
      }
    }
    window.addEventListener("scroll", activateNav)
  })

  const menuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className={styles.navbar}>

      <div className={styles.container}>
        <div className={styles.menu}>

          <Link href={gitHubLink} target='blank'><FontAwesomeIcon icon={faGithub} className={styles.icon}/></Link>
          <Link href={linkedInLink} target='blank'><FontAwesomeIcon icon={faLinkedin} className={styles.icon} /></Link>  
      
          <Search/>
        
        </div>

      </div>

    </nav>
  )
}

export default Navbar