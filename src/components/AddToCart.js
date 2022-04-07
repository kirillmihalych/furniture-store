import React, { useState } from 'react'
import { FaCheck } from '../assets/icons'
import AmountBtns from './AmountButtons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AddToCart = ({ product }) => {
  const [mainColor, setMainColor] = useState('')
  const { colors = [], stock } = product

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
                {' '}
                {mainColor === color ? (
                  <FaCheck className='color_icon' />
                ) : null}
              </span>
            )
          })}
        </div>
        <AmountBtns stock={stock} />
        <Link to='/'>add to cart</Link>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
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
