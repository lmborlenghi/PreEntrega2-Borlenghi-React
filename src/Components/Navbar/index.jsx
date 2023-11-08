import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = ({carritoIcono}) => {

  return (

    <div className={styles.container}>
      <Link className={styles.link} to="/">
        <p>DRUMS<span> Online!</span></p>
      </Link>
      <ul className={styles.listaNav}>
          <li><Link className={styles.link} to='/products'>Productos</Link></li>
          <li><Link className={styles.link} to='/category/Baterias'>Baterias Completas</Link></li>
          <li><Link className={styles.link} to='/category/Platillos'>Platillos</Link></li>
          <li><Link className={styles.link} to='/category/Redoblantes'>Redoblantes</Link></li>
          <li>About</li>
      </ul>
      <div className={styles.carritoDiv}>
          <img src={carritoIcono} alt="icono del carrito" width="30" height="30"/>
          <p className={styles.pCarrito}>(0)</p>
      </div>
    </div>

  )

}

export default Navbar