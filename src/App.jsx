import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import ItemDeatilContainer from './Components/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer';


function App() {

  
  return (

    <div>
      <Navbar carritoIcono="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/products' element={<ItemListContainer />}/>
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDeatilContainer />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
