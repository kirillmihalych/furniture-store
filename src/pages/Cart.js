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
  margin-top: 5rem;
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border: 2px solid var(--darkGrey);
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    color: var(--black);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .link-btn:hover {
    transition: var(--transition);
    background: lightgreen;
  }
  .clear-btn {
    font-size: 0.975rem;
    font-weight: 400;
  }
  .clear-btn:hover {
    transition: var(--transition);
    background: lightpink;
  }
`

export default Cart
