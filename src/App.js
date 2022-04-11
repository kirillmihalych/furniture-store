import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProducts } from './features/productSlice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Footer, Sidebar } from './components'
import { Home, About, Error, Products, SingleProduct, Cart } from './pages'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <main className='center'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<SingleProduct />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
