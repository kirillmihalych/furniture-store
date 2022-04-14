import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Footer, Sidebar } from './components'
import {
  Home,
  About,
  Error,
  Products,
  SingleProduct,
  Cart,
  Checkout,
} from './pages'

const App = () => {
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
          <Route path='checkout' element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
