'use client'
import styles from '../styles/Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Search from './Search'


function Navbar() {

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

          <FontAwesomeIcon icon={faGithub} className={styles.icon}/>
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />  
      
          <Search/>
        
        </div>

      </div>

    </nav>
  )
}

export default Navbar