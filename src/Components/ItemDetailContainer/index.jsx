import {  useParams } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import styles from './itemDetailContainer.module.css';
import { useEffect, useState } from "react";
import axios from "axios";

const URL = '../src/products.json'

function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const {id}=useParams()
    const getProducto = async (id) => {
      try {
        const response = await axios(URL);
        setProduct(response.data.find((item)=> item.id === parseInt(id) ));
      } catch (error) {
        console.log("ERROR: " + error);
      }
    };
  
    useEffect(() => {
  
      getProducto(id);
  
    }, [id]);
  return (

   <>
  { !product ? <p>Loading...</p>
   : <section className={styles.section}>
            <img className="d-block w-100" src={product.img1} alt="First slide"/>
            <h2 className={styles.h2}>{product.title}</h2>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.colores}>{product.colores}</p>
            <p className={styles.precio}>${product.precio}</p>

            </section>}
   </>

    
  );
}

export default ItemDetailContainer;