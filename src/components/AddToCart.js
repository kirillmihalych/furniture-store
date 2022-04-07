import React, { useState } from 'react'
import { FaCheck } from '../assets/icons'
import styled from 'styled-components'

const AddToCart = ({ product }) => {
  const [mainColor, setMainColor] = useState('')
  const { colors = [], stock } = product

  return (
    <Wrapper>
      <section>
        <div className='colors'>
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
        <div className='amount-btns'></div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .colors {
    margin: 1rem 0;
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
