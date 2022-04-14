import styled from 'styled-components'
import { FaShoppingCart } from '../../assets/icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ButtonsContainer = () => {
  const { total_items } = useSelector((state) => state.cart)
  return (
    <Wrapper className='btns-container'>
      <div className='container'>
        <Link to='cart'>
          <h4>cart</h4>
          <FaShoppingCart />
          <h4 className='total-items'>{total_items}</h4>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .container {
    position: relative;
    background: transparent;
    padding: 0.2rem 0.35rem;
    border: 2px solid var(--black);
    border-radius: 5px;
    margin-left: 1rem;
  }
  .total-items {
    position: absolute;
    color: #ffd700;
    background: var(--white);
    color: var(--black);
    border: 1px solid black;
    padding: 1px 2px;
    top: 0;
    right: -8%;
    border-radius: 30%;
  }
  .container:hover {
    cursor: pointer;
    background: var(--black);
    h4,
    a {
      transition: all 0.15s linear;
      color: var(--white);
    }
    .total-items {
      transition: all 0.15s linear;
      color: var(--black);
    }
  }
  a {
    color: var(--notExactlyBlack);
    cursor: pointer;
    display: grid;
    grid-template-columns: auto auto;
    place-items: center;
    padding: 0.1rem 0.2rem;
    background: transparent;
    border: none;
  }
  h4 {
    margin-right: 10px;
    text-transform: capitalize;
  }
  svg {
    font-size: 1.3rem;
  }
  @media screen and (min-width: 772px) {
    display: flex;
    align-items: center;
  }
`

export default ButtonsContainer
