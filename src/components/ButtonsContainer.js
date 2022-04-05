import styled from 'styled-components'
import { FaUserAlt, FaShoppingCart } from '../assets/icons'
import { Link } from 'react-router-dom'

const ButtonsContainer = () => {
  return (
    <Wrapper>
      <Link to='cart'>
        <h4>cart</h4>
        <FaShoppingCart />
      </Link>
      <Link to='login'>
        <h4>login</h4>
        <FaUserAlt />
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  a {
    color: var(--notExactlyBlack);
    cursor: pointer;
    display: grid;
    grid-template-columns: auto auto;
    place-items: center;
    padding: 0.1rem 0.2rem;
    background: transparent;
    border: none;
    margin-left: 1rem;
  }
  h4:hover,
  button:hover {
    transition: var(--transition);
    color: var(--denim);
  }
  h4 {
    margin-right: 10px;
    font-size: 1.4rem;
    text-transform: uppercase;
  }
  svg {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`

export default ButtonsContainer
