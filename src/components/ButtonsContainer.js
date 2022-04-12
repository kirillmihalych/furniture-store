import styled from 'styled-components'
import { FaShoppingCart } from '../assets/icons'
import { Link } from 'react-router-dom'

const ButtonsContainer = () => {
  return (
    <Wrapper className='btns-container'>
      <div className='container'>
        <Link to='cart'>
          <h4>cart</h4>
          <FaShoppingCart />
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media screen and (min-width: 772px) {
    display: flex;
    align-items: center;
  }
  .container {
    background: transparent;
    padding: 0.2rem 0.35rem;
    border: 2px solid var(--black);
    border-radius: 5px;
    margin-left: 1rem;
  }
  .container:hover {
    background: var(--black);
    h4,
    a {
      transition: all 0.15s linear;
      color: var(--white);
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
`

export default ButtonsContainer
