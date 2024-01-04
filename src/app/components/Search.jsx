import styles from '../styles/Search.module.css'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Search() {
  return (
    <div className={styles.inputWrap}>
        <input type="text" id={styles.searchInput} placeholder="Search Page..."/>
        <FontAwesomeIcon icon={faSearch} className={styles.icon}/>
    </div>
  )
}

export default Search