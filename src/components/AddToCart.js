import React, { useState } from 'react'
import { FaCheck } from '../assets/icons'
import AmountBtns from './AmountButtons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cartSlice'

const AddToCart = ({ product }) => {
  const dispatch = useDispatch()

  const { colors = [], stock, id } = product
  const [mainColor, setMainColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const increase = () => {
    setAmount((oldValue) => {
      let newValue = oldValue + 1
      if (newValue > stock) {
        newValue = stock
      }
      return newValue
    })
  }

  const decrease = () => {
    setAmount((oldValue) => {
      let newValue = oldValue - 1
      if (newValue < 1) {
        newValue = 1
      }
      return newValue
    })
  }

  return (
    <Wrapper>
      <section className='add-to-cart'>
        <div className='colors'>
          <h3 className='colors-title'>colors:</h3>
          {colors.map((color, index) => {
            return (
              <span
                className='color'
                key={index}
                style={{ background: color }}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? (
                  <FaCheck className='color_icon' />
                ) : null}
              </span>
            )
          })}
        </div>
        <AmountBtns amount={amount} increase={increase} decrease={decrease} />
        <Link
          to='/cart'
          className='link'
          onClick={() =>
            dispatch(addToCart({ id, mainColor, amount, product }))
          }
        >
          add to cart
        </Link>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .link {
    color: var(--black);
    background: var(--white);
    font-size: 1.5rem;
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    border: 3px solid var(--black);
  }
  .link:hover {
    transition: var(--transition);

    background: var(--darkGrey);
  }
  .add-to-cart {
    display: grid;
    place-items: center;
    gap: 2rem;
  }
  .colors-title {
    margin-right: 1rem;
  }
  .colors {
    margin-top: 1rem;
    display: flex;
  }
  .color {
    position: relative;
    cursor: pointer;
    display: inline-block;
    border: 2px solid black;
    margin-right: 0.5rem;
    width: 25px;
    height: 25px;
  }
  .color_icon {
    color: var(--green);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export default AddToCart
