import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
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
          image: product.url,
          price: product.price,
          max: product.stock,
        }
        state.cart = [...state.cart, newProduct]
      }
    },
  },
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
