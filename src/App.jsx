import './App.scss';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { BrowserRouter } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsFetchData } from './actions/products.js';

function App() {
  const [totalCount, setTotalCount] = useState(0)
  const [productsArray, setProductsArray] = useState([])
  const [updatedProductsArray, setUpdatedProductsArray] = useState(productsArray)

  useEffect(() => {
    setUpdatedProductsArray(productsArray)
  }, [])

  const total = totalCount

  const totalCountUpdater = (newTotalCount) => setTotalCount(newTotalCount)

  useEffect(() => {
    setTotalCount(totalCount)
  }, [totalCount])

  const dispatch = useDispatch()
  const products = useSelector(state => state.products)

  useEffect(() => {
    const url = 'http://localhost:3333/products'
    dispatch(productsFetchData(url))
  }, [dispatch])

  return (
    <div className="App">
      <BrowserRouter>
        <header className='header'>
          <div className='container'>
            <div className='header__wrapper'>
              <Header total={total} />
            </div>
          </div>
        </header>

        <main className='main'>
          <Main 
            products={products} 
            totalCountUpdater={totalCountUpdater} 
            productsArray={updatedProductsArray} 
            updatedProductsArray={updatedProductsArray} 
            setUpdatedProductsArray={setUpdatedProductsArray} />
        </main>

        <footer className="footer">
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}
export default App;
