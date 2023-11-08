import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardHome from "../CardHome";
import styles from './itemListContainer.module.css';


const URL = '../src/products.json'
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {id}= useParams()

  const getProductos = async () => {
    try {
      const response = await axios(URL);
      if(id){
        setProducts(response.data.filter((item) => item.category === id))
      }else{

        setProducts(response.data)
      }
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };

  useEffect(() => {

    getProductos();

  }, [id]);

  return (

    <div className={styles.wrapper}>
        {products.map((product) => (
            <CardHome key={product.id} product={product}/>
        ))}
    </div>

  )

}

export default ItemListContainer