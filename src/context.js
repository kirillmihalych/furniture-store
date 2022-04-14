import React, { useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countCartTotals } from './features/cartSlice'
import { getProducts } from './features/productSlice'
import {
  setProducts,
  sortProducts,
  filterProducts,
} from './features/filterSlice'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.cart)
  const { products } = useSelector((state) => state.product)
  const { sort, filters } = useSelector((state) => state.filter)

  useEffect(() => {
    dispatch(countCartTotals())
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  useEffect(() => {
    dispatch(setProducts(products))
  }, [products])

  useEffect(() => {
    dispatch(filterProducts())
    dispatch(sortProducts())
  }, [products, sort, filters])

  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
