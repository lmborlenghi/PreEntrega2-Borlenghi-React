import { Link } from 'react-router-dom';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <ul className={styles.ulFooter}>
            <li><Link className={styles.link} to='/products'>Productos</Link></li>
            <li>Contacto</li>
            <li>About</li>
        </ul>
        <div className={styles.div1Footer}>
            <h3>Drums Online 2023</h3>
        </div>
        <div className={styles.div2Footer}>
            <p>Instagram</p>
        </div>   
    </div>
  )
}

export default Footer