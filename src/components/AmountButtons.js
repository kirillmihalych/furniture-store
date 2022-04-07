import React, { useState } from 'react'
import { FaMinus, FaPlus } from '../assets/icons'
import styled from 'styled-components'

const AmountBtns = ({ stock }) => {
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
      <section className='btn-container'>
        <button onClick={decrease} className='btn-count'>
          <FaMinus />
        </button>
        <h3 className='amount'>{amount}</h3>
        <button onClick={increase} className='btn-count'>
          <FaPlus />
        </button>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .amount {
    width: 35px;
    text-align: center;
  }
  .btn-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  .btn-count {
    cursor: pointer;
    background: var(--notExactlyWhite);
    color: var(--notExactlyBlack);
    font-size: 1.75rem;
    border: 3px solid var(--notExactlyBlack);
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-count:active {
    transition: var(--transition);
    scale: 0.9;
  }
`

export default AmountBtns
