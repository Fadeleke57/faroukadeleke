'use client'
import styles from '../styles/Footer.module.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import Form from './Form';
import SocialMedia from './SocialMedia';

function Footer() {

  const social_medias = [
    {
      icon : faDiscord,
      link : 'https://discordapp.com/users/faroukade_73606',
      site : 'Discord',
      username : '@faroukade_73606'
    },
    {
      icon : faLinkedin,
      link : 'https://www.linkedin.com/in/farouk-adeleke/',
      site : 'LinkedIn',
      username : '@farouk-adeleke'
    },
    {
      icon : faGithub,
      link : 'https://github.com/Fadeleke57',
      site : 'Github',
      username : '@Fadeleke57'
    }
  ]

  return (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h1><span className={styles.gradient}>Get In</span> Touch</h1>
          <br></br>
          <h3>Have a question? Inquiry? Send a message here.</h3>
          <br></br><br></br>
        </div>
        <Form/>
      </div>
      <div className={styles.socialMedia}>
       {social_medias.map((media_config, id) => (
        <SocialMedia icon={media_config.icon} link={media_config.link} site={media_config.site} username={media_config.username} key={id}/>
       ))}
      </div>
      <p>&copy; All Rights Reserved - Farouk Adeleke.</p>
    </div>
  </footer>
  )
}

export default Footer