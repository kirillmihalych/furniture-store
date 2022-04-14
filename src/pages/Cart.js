import React from 'react'
import styled from 'styled-components'
import { CartColumns, CartItem, CartTotals } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../features/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.cart)

  return (
    <Wrapper className='section-center'>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <hr />
      <div className='link-container'>
        <Link to='/products' className='link-btn'>
          continue shopping
        </Link>
        <button
          className='link-btn clear-btn'
          onClick={() => dispatch(clearCart())}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 5rem 0;
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border: 3px solid var(--black);
    text-transform: capitalize;
    background: #eebc1d;
    padding: 0.25rem 0.5rem;
    color: var(--black);
    letter-spacing: var(--spacing);
    font-weight: 700;
    cursor: pointer;
  }
  .link-btn:hover {
    background: #ffd700;
    transition: var(--transition);
  }
  .clear-btn {
    font-size: 0.975rem;
    background: var(--darkGrey);
  }
  .clear-btn:hover {
    transition: var(--transition);
    background: lightgray;
  }
`

export default Cart
