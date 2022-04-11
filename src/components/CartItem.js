import styled from 'styled-components'
import { FaTrash } from '../assets/icons'
import { AmountBtns } from '../components'
import { removeItem, toggleAmount } from '../features/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({ id, img, name, color, price, amount }) => {
  const dispatch = useDispatch()
  let value
  const increase = () => {
    value = 'inc'
    dispatch(toggleAmount({ id, value }))
  }
  const decrease = () => {
    value = 'dec'
    dispatch(toggleAmount({ id, value }))
  }

  return (
    <Wrapper>
      <div className='title'>
        <img src={img} alt={name} />
        <div>
          <h5 className='name'>{name}</h5>
          <p className='color'>
            color: <span style={{ background: color }}></span>
          </p>
          <h5 className='price-small'>{price / 100}$</h5>
        </div>
      </div>
      <h5 className='price'>{price / 100}$</h5>
      <AmountBtns amount={amount} increase={increase} decrease={decrease} />
      <h5 className='subtotal'>{(price / 100) * amount}$</h5>
      <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>
        <FaTrash />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;

  place-items: center;
  margin-bottom: 3rem;
  .title {
    height: 100%;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }
  .color {
    color: var(--darkGrey);
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      margin-left: 0.5rem;
      border: 2px solid var(--black);
    }
  }
  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
      border: none;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    color: var(--red);
    background: var(--black);
    border: transparent;
    letter-spacing: var(--spacing);
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
    }
  }
  .remove-btn:hover {
    transition: var(--transition);
    color: lightpink;
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--black);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: var(--black);
      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`

export default CartItem
