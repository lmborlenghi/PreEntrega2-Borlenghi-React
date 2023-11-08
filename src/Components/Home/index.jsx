import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardHome from '../CardHome';
import styles from './home.module.css';

const URL = '../src/products.json'

const Home = () => {

    const [products, setProducts] = useState([]);

  const getProductos = async () => {
    try {
      const response = await axios(URL);
      setProducts(response.data);
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  useEffect(() => {

    getProductos();

  }, []);

  return (
    <div>
        <div className={styles.hero}>
            <p>WELCOME</p>
        </div>
        <section className={styles.section}>
            <h1>Drums Online!</h1>
            <p>Productos destacados</p>
            <div className={styles.wrapper}>
                {products.slice(4).map((product) => (
                    <CardHome key={product.id} product={product}/>
                ))}
            </div>
        </section>
        
    </div>
  )
}

export default Home