import { createSlice } from '@reduxjs/toolkit'

const getFromLocalStorage = () => {
  let localCart = localStorage.getItem('cart')
  if (localCart) {
    return (localCart = JSON.parse(localCart))
  } else {
    return []
  }
}

const initialState = {
  cart: getFromLocalStorage(),
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, amount, mainColor, product } = action.payload

      let tempProduct = state.cart.find(
        (product) => product.id === id + mainColor
      )
      if (tempProduct) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + mainColor) {
            let newAmount = cartItem.amount + amount
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max
            }
            return { ...cartItem, amount: newAmount }
          } else {
            return cartItem
          }
        })
        state.cart = tempCart
      } else {
        const newProduct = {
          id: id + mainColor,
          name: product.name,
          color: mainColor,
          amount,
          img: product.img,
          price: product.price,
          max: product.stock,
        }

        state.cart = [...state.cart, newProduct]
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },
    clearCart: (state) => {
      state.cart = []
    },
  },
})

export const { addToCart, clearCart } = cartSlice.actions

export default cartSlice.reducer
