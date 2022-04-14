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
  total_items: 0,
  total_amount: 0,
  shipping_fee: 322,
  isModalShown: false,
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
      }
    },
    clearCart: (state) => {
      state.cart = []
    },
    removeItem: (state, action) => {
      const tempCart = state.cart.filter((item) => item.id !== action.payload)
      state.cart = tempCart
    },
    toggleAmount: (state, action) => {
      const { id, value } = action.payload
      const tempCart = state.cart.map((item) => {
        if (item.id === id) {
          if (value === 'inc') {
            console.log(value === 'inc')
            let newAmount = item.amount + 1

            if (newAmount > item.max) {
              newAmount = item.max
            }

            return { ...item, amount: newAmount }
          }
          if (value === 'dec') {
            let newAmount = item.amount - 1
            if (newAmount < 1) {
              newAmount = 1
            }
            return { ...item, amount: newAmount }
          }
        }
        return item
      })
      state.cart = tempCart
    },
    countCartTotals: (state) => {
      const { total_items, total_amount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem

          total.total_items += amount
          total.total_amount += price * amount
          return total
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      )
      state.total_items = total_items
      state.total_amount = total_amount
    },
    showModal: (state) => {
      state.isModalShown = true
    },
    closeModal: (state) => {
      state.isModalShown = false
    },
  },
})

export const {
  addToCart,
  clearCart,
  removeItem,
  toggleAmount,
  countCartTotals,
  showModal,
  closeModal,
} = cartSlice.actions

export default cartSlice.reducer
